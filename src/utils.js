const { PrismaClient } = require("@prisma/client");
// function hasPermission(user, permissionsNeeded) {
//   const matchedPermissions = user.permissions.filter(permissionTheyHave =>
//     permissionsNeeded.includes(permissionTheyHave)
//   );
//   if (!matchedPermissions.length) {
//     throw new Error(`You do not have sufficient permissions

//       : ${permissionsNeeded}

//       You Have:

//       ${user.permissions}
//       `);
//   }
// }

// async function main() {
//   // ... you will write your Prisma Client queries here
//   // const create = await prisma.user.create({
//   //   data: {
//   //     name: 'Test Name4',
//   //     email: 'test4@email.com',
//   //     posts: {
//   //       create: { title: 'see a new table' },
//   //     },
//   //     profile: {
//   //       create: { bio: 'I love cats.' },
//   //     },
//   //   },
//   // });
//   // const post = await prisma.post.update({
//   //   where: { id: 1 },
//   //   data: { published: true },
//   // });
//   const allUsers = await prisma.user.findMany({
//     include: {
//       posts: true,
//       profile: true,
//     },
//   })
//   console.log(allUsers);
// }
// export interface Store {
//   allUsers: Function;
//   create: Function;
//   postUpdate: Function;
// }

module.exports.createStore = () => {
  const prisma = new PrismaClient();
  return {
    allUsers: async () => {
      console.log('called from store')
      return await prisma.user.findMany({
        include: {
          posts: true,
          profile: true,
        },
      });
    },
    create: async ({ name, email, posts = {}, profile = {}} = {}) => {
      return await prisma.user.create({
        data: {
          name,
          email,
          posts,
          profile,
        },
      });
    },
    postUpdate: async ({ id }) => {
      return await prisma.post.update({
        where: { id },
        data: { published: true },
      });
    }
  };
}

// exports.hasPermission = hasPermission;
