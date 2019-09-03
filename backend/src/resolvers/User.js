const User = {
  lists: ({ id }, args, context) => {
    return context.prisma.user({ id }).lists()
  },
}

module.exports = {
  User,
}
