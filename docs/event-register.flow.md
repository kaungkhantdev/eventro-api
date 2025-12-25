**Event Registration Flow**:

```
┌─────────────────────────────────────────────────────────────────────┐
│  1. BROWSE                                                          │
│     User views Event → sees TicketTypes (VIP $100, General $50)    │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  2. SELECT TICKETS                                                  │
│     User selects: 2x VIP tickets                                   │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  3. CREATE REGISTRATION                                             │
│                                                                     │
│     Registration {                                                  │
│       userId: "user_123"                                           │
│       eventId: "event_456"                                         │
│       ticketTypeId: "vip_789"                                      │
│       quantity: 2                                                  │
│       totalAmount: 200.00                                          │
│       status: PENDING                                              │
│       paymentStatus: PENDING                                       │
│       confirmationCode: "EVT-2025-ABC123"                          │
│     }                                                              │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  4. ENTER ATTENDEE DETAILS                                          │
│                                                                     │
│     Attendee 1 {                       Attendee 2 {                │
│       firstName: "John"                  firstName: "Jane"         │
│       lastName: "Doe"                    lastName: "Doe"           │
│       email: "john@..."                  email: "jane@..."         │
│       ticketCode: "TKT-AAA111"           ticketCode: "TKT-BBB222"  │
│     }                                  }                           │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  5. PAYMENT                                                         │
│                                                                     │
│     Payment {                                                       │
│       registrationId: "reg_xxx"                                    │
│       amount: 200.00                                               │
│       method: "card"                                               │
│       provider: "stripe"                                           │
│       transactionId: "pi_stripe123"                                │
│       status: PENDING → PAID                                       │
│       paidAt: "2025-01-15T10:30:00Z"                              │
│     }                                                              │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  6. CONFIRM                                                         │
│                                                                     │
│     Registration.status: PENDING → CONFIRMED                        │
│     Registration.paymentStatus: PENDING → PAID                      │
│     TicketType.soldCount: 10 → 12                                  │
│                                                                     │
│     → Send confirmation email with QR codes                        │
└─────────────────────────────────────────────────────────────────────┘
                                    ↓
┌─────────────────────────────────────────────────────────────────────┐
│  7. EVENT DAY - CHECK IN                                            │
│                                                                     │
│     Scan QR: "TKT-AAA111"                                          │
│     Attendee 1.checkedInAt: "2025-01-20T18:00:00Z" ✓               │
│                                                                     │
│     Scan QR: "TKT-BBB222"                                          │
│     Attendee 2.checkedInAt: "2025-01-20T18:05:00Z" ✓               │
└─────────────────────────────────────────────────────────────────────┘
```

**Summary**:

| Model | Purpose |
|-------|---------|
| `Event` | What's happening |
| `TicketType` | Pricing tiers (VIP, General, Early Bird) |
| `Registration` | The booking/order |
| `Attendee` | Each person attending (for check-in) |
| `Payment` | Transaction record |

**Key relationships**:

```
User ──buys──→ Registration ──contains──→ Attendees (1 per ticket)
                    │
                    ├──→ TicketType (which tier)
                    ├──→ Event (which event)
                    └──→ Payment (transaction)
```





