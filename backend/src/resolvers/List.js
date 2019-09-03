const List = {
  user: ({ id }, args, context) => {
    return context.prisma.list({ id }).user()
  },
  places: ({ id }, args, context) => {
    return context.prisma.list({ id }).places()
  },
}

module.exports = {
  List,
}
