## Admin Role Permission Idea

For admin panel with multiple admin levels, use role-permission:

```prisma
// enums.prisma
enum UserRole {
  ATTENDEE
  ORGANIZER
  ADMIN
}

// admin.prisma
model AdminRole {
  id          String   @id @default(uuid())
  name        String   @unique  // "SUPER_ADMIN", "SUPERVISOR", "MODERATOR"
  description String?
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  permissions AdminRolePermission[]
  admins      AdminUser[]

  @@map("admin_roles")
}

model AdminPermission {
  id          String   @id @default(uuid())
  name        String   @unique  // "users:read", "users:delete", "events:approve"
  group       String   // "users", "events", "payments" - for UI grouping
  description String?
  createdAt   DateTime @default(now()) @map("created_at")

  roles       AdminRolePermission[]

  @@index([group])
  @@map("admin_permissions")
}

model AdminRolePermission {
  roleId       String @map("role_id")
  permissionId String @map("permission_id")

  role       AdminRole       @relation(fields: [roleId], references: [id])
  permission AdminPermission @relation(fields: [permissionId], references: [id])

  @@id([roleId, permissionId])
  @@map("admin_role_permissions")
}

model AdminUser {
  id        String    @id @default(uuid())
  userId    String    @unique @map("user_id")
  roleId    String    @map("role_id")
  createdAt DateTime  @default(now()) @map("created_at")
  updatedAt DateTime  @updatedAt @map("updated_at")

  user      User      @relation(fields: [userId], references: [id])
  role      AdminRole @relation(fields: [roleId], references: [id])

  @@map("admin_users")
}
```

**Update User model**:

```prisma
model User {
  id        String    @id @default(uuid())
  email     String    @unique
  username  String    @unique
  password  String
  firstName String    @map("first_name")
  lastName  String    @map("last_name")
  role      UserRole  @default(ATTENDEE)
  isActive  Boolean   @default(true) @map("is_active")
  deletedAt DateTime? @map("deleted_at")
  createdAt DateTime  @default(now()) @map("created_at")
  updatedAt DateTime  @updatedAt @map("updated_at")

  attendeeProfile  AttendeeProfile?
  organizerProfile OrganizerProfile?
  adminUser        AdminUser?          // ← add this
  events           Event[]

  @@index([email])
  @@map("users")
}
```

**Seed data**:

```typescript
// Permissions
const permissions = [
  // Users
  { name: 'users:read', group: 'users' },
  { name: 'users:edit', group: 'users' },
  { name: 'users:delete', group: 'users' },
  { name: 'users:ban', group: 'users' },
  
  // Events
  { name: 'events:read', group: 'events' },
  { name: 'events:edit', group: 'events' },
  { name: 'events:delete', group: 'events' },
  { name: 'events:approve', group: 'events' },
  
  // Payments
  { name: 'payments:read', group: 'payments' },
  { name: 'payments:refund', group: 'payments' },
  
  // Settings
  { name: 'settings:read', group: 'settings' },
  { name: 'settings:edit', group: 'settings' },
  
  // Roles
  { name: 'roles:read', group: 'roles' },
  { name: 'roles:edit', group: 'roles' },
];

// Roles
const roles = [
  { 
    name: 'SUPER_ADMIN', 
    permissions: ['*']  // all
  },
  { 
    name: 'SUPERVISOR', 
    permissions: [
      'users:read', 'users:edit', 'users:ban',
      'events:read', 'events:edit', 'events:approve',
      'payments:read',
    ] 
  },
  { 
    name: 'MODERATOR', 
    permissions: [
      'users:read',
      'events:read', 'events:approve',
    ] 
  },
];
```

**Structure**:

```
Regular Users          Admin Panel
─────────────          ─────────────
ATTENDEE               SUPER_ADMIN (all permissions)
ORGANIZER        →     SUPERVISOR (manage users, events)
ADMIN ──────────┘      MODERATOR (view & approve only)
```

**Flow**:

```
User (role: ADMIN)
      ↓
AdminUser (roleId → AdminRole)
      ↓
AdminRole → AdminRolePermission → AdminPermission
      ↓
"users:delete", "events:approve", etc.
```

This separates public roles from admin-level permissions. Clean and scalable.