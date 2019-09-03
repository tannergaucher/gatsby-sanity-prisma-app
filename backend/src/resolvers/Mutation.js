const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { getUserId, AuthError } = require('../utils/get-user-id')

const Mutation = {
  signup: async (parent, { email, password }, context) => {
    const hashedPassword = await hash(password, 10)

    const user = await context.prisma.createUser({
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    return {
      token,
      user,
    }
  },
  login: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })

    if (!user) {
      throw new Error(`No user found for this email`)
    }

    const passwordValid = await compare(password, user.password)

    if (!passwordValid) {
      throw new Error(`Invalid password`)
    }

    const token = sign(
      {
        userId: user.id,
      },
      process.env.APP_SECRET
    )

    return {
      token,
      user,
    }
  },
  createList: async (
    parent,
    { title, placeSanityId, placeName, placeImageUrl, placeSlug },
    context
  ) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const list = await context.prisma.createList({
      title,
      places: {
        create: {
          placeSanityId,
          placeName,
          placeImageUrl,
          placeSlug,
        },
      },
      user: {
        connect: {
          id: userId,
        },
      },
    })

    return list
  },
}

module.exports = {
  Mutation,
}
