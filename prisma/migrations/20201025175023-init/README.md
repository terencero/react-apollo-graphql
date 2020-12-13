# Migration `20201025175023-init`

This migration has been generated at 10/25/2020, 12:50:23 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Comments" (
"id" SERIAL,
"text" text   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER INDEX "public"."Profile_userId_key" RENAME TO "Profile.userId_unique"

ALTER INDEX "public"."User_email_key" RENAME TO "User.email_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20201025175023-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,38 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model Post {
+  id        Int      @default(autoincrement()) @id
+  title     String
+  createdAt DateTime @default(now())
+  content   String?
+  published Boolean  @default(false)
+  authorId  Int
+  user      User     @relation(fields: [authorId], references: [id])
+}
+
+model Profile {
+  id     Int     @default(autoincrement()) @id
+  bio    String?
+  userId Int     @unique
+  user   User    @relation(fields: [userId], references: [id])
+}
+
+model User {
+  id      Int      @default(autoincrement()) @id
+  name    String?
+  email   String   @unique
+  posts    Post[]
+  profile Profile?
+}
+
+model Comments {
+  id Int @default(autoincrement()) @id
+  text String
+}
```


