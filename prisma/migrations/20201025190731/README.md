# Migration `20201025190731`

This migration has been generated at 10/25/2020, 2:07:31 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Cart" (
"id" SERIAL,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Item" (
"id" SERIAL,
"text" text   NOT NULL ,
"cartId" integer   ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Cart.userId_unique" ON "public"."Cart"("userId")

ALTER TABLE "public"."Cart" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Item" ADD FOREIGN KEY ("cartId")REFERENCES "public"."Cart"("id") ON DELETE SET NULL ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201025175023-init..20201025190731
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 model Post {
   id        Int      @default(autoincrement()) @id
@@ -29,10 +29,23 @@
   name    String?
   email   String   @unique
   posts    Post[]
   profile Profile?
+  cart Cart?
 }
 model Comments {
   id Int @default(autoincrement()) @id
   text String
 }
+
+model Cart {
+  id Int @default(autoincrement()) @id
+  items Item[]
+  userId Int @unique
+  user User @relation(fields: [userId], references: [id])
+}
+
+model Item {
+  id Int @default(autoincrement()) @id
+  text String
+}
```


