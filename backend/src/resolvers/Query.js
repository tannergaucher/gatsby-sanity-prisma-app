const { getUserId } = require('../utils/get-user-id')

const Query = {
  me: async (parent, args, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    return context.prisma.user({ id: userId })
  },
  list: async (parent, { listId }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      return null
    }

    // TODO: Check that user owns that list
    return context.prisma.list({ id: listId })
  },
}

module.exports = {
  Query,
}
