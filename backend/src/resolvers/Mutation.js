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
    { title, placeSanityId, placeName, placeImageUrl, placeSlug, lat, lng },
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
          lat,
          lng,
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

  togglePlace: async (
    parent,
    { listId, placeSanityId, placeName, placeImageUrl, placeSlug, lat, lng },
    context
  ) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    const [existing] = await context.prisma
      .user({ id: userId })
      .lists({
        where: {
          id: listId,
        },
      })
      .places({
        where: {
          placeSanityId: placeSanityId,
        },
      })

    if (existing.places.length) {
      // remove place from list

      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            delete: {
              id: existing.places[0].id,
            },
          },
        },
      })
    } else {
      // add place to list
      return context.prisma.updateList({
        where: {
          id: listId,
        },
        data: {
          places: {
            create: {
              placeSanityId: placeSanityId,
              placeName: placeName,
              placeImageUrl: placeImageUrl,
              placeSlug: placeSlug,
              lat: lat,
              lng: lng,
            },
          },
        },
      })
    }
  },
}

module.exports = {
  Mutation,
}
