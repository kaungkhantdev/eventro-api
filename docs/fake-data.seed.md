I'll create a comprehensive SQL seed file for you:Done! Here's what's included:

**Summary**:

| Table | Records |
|-------|---------|
| Users | 17 (2 admins, 5 organizers, 10 attendees) |
| Attendee Profiles | 10 |
| Organizer Profiles | 5 |
| Categories | 10 |
| Tags | 15 |
| Venues | 15 |
| Events | 100 |
| Ticket Types | 123 |
| Event Tags | 90+ |

**Categories included**:
Music, Technology, Business, Sports, Arts, Food & Drink, Health, Education, Community, Entertainment

**Tags included**:
Outdoor, Indoor, Free, Family Friendly, Networking, Workshop, Conference, Festival, Live Music, Virtual, Beginner, Advanced, Weekend, Nightlife, Food Included

**Run it**:
```bash
psql -U postgres -d eventro_dev -f eventro_seed.sql
```

Or with Prisma:
```bash
npx prisma db seed
```

### Eventro Seed SQL
```sql copy
-- =============================================
-- EVENTRO SEED DATA
-- =============================================

-- =============================================
-- 1. USERS
-- =============================================
INSERT INTO users (id, email, username, password, first_name, last_name, role, is_active, created_at, updated_at) VALUES
-- Admins
('a0000001-0000-0000-0000-000000000001', 'admin@eventro.com', 'admin', '$2b$10$hashedpassword123', 'System', 'Admin', 'ADMIN', true, NOW(), NOW()),
('a0000001-0000-0000-0000-000000000002', 'superadmin@eventro.com', 'superadmin', '$2b$10$hashedpassword123', 'Super', 'Admin', 'ADMIN', true, NOW(), NOW()),

-- Organizers
('b0000001-0000-0000-0000-000000000001', 'john.organizer@email.com', 'john_events', '$2b$10$hashedpassword123', 'John', 'Smith', 'ORGANIZER', true, NOW(), NOW()),
('b0000001-0000-0000-0000-000000000002', 'sarah.events@email.com', 'sarah_events', '$2b$10$hashedpassword123', 'Sarah', 'Johnson', 'ORGANIZER', true, NOW(), NOW()),
('b0000001-0000-0000-0000-000000000003', 'mike.productions@email.com', 'mike_prod', '$2b$10$hashedpassword123', 'Mike', 'Williams', 'ORGANIZER', true, NOW(), NOW()),
('b0000001-0000-0000-0000-000000000004', 'emma.concerts@email.com', 'emma_concerts', '$2b$10$hashedpassword123', 'Emma', 'Brown', 'ORGANIZER', true, NOW(), NOW()),
('b0000001-0000-0000-0000-000000000005', 'tech.events@email.com', 'tech_events', '$2b$10$hashedpassword123', 'David', 'Lee', 'ORGANIZER', true, NOW(), NOW()),

-- Attendees
('c0000001-0000-0000-0000-000000000001', 'alice@email.com', 'alice_user', '$2b$10$hashedpassword123', 'Alice', 'Davis', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000002', 'bob@email.com', 'bob_user', '$2b$10$hashedpassword123', 'Bob', 'Miller', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000003', 'charlie@email.com', 'charlie_user', '$2b$10$hashedpassword123', 'Charlie', 'Wilson', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000004', 'diana@email.com', 'diana_user', '$2b$10$hashedpassword123', 'Diana', 'Moore', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000005', 'evan@email.com', 'evan_user', '$2b$10$hashedpassword123', 'Evan', 'Taylor', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000006', 'fiona@email.com', 'fiona_user', '$2b$10$hashedpassword123', 'Fiona', 'Anderson', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000007', 'george@email.com', 'george_user', '$2b$10$hashedpassword123', 'George', 'Thomas', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000008', 'hannah@email.com', 'hannah_user', '$2b$10$hashedpassword123', 'Hannah', 'Jackson', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000009', 'ivan@email.com', 'ivan_user', '$2b$10$hashedpassword123', 'Ivan', 'White', 'ATTENDEE', true, NOW(), NOW()),
('c0000001-0000-0000-0000-000000000010', 'julia@email.com', 'julia_user', '$2b$10$hashedpassword123', 'Julia', 'Harris', 'ATTENDEE', true, NOW(), NOW());

-- =============================================
-- 2. ATTENDEE PROFILES
-- =============================================
INSERT INTO attendee_profiles (id, user_id, phone, birth_date, country, created_at, updated_at) VALUES
('d0000001-0000-0000-0000-000000000001', 'c0000001-0000-0000-0000-000000000001', '+1234567890', '1990-05-15', 'USA', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000002', 'c0000001-0000-0000-0000-000000000002', '+1234567891', '1988-08-22', 'USA', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000003', 'c0000001-0000-0000-0000-000000000003', '+1234567892', '1995-03-10', 'Canada', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000004', 'c0000001-0000-0000-0000-000000000004', '+1234567893', '1992-11-28', 'UK', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000005', 'c0000001-0000-0000-0000-000000000005', '+1234567894', '1985-07-04', 'Australia', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000006', 'c0000001-0000-0000-0000-000000000006', '+1234567895', '1998-01-30', 'Germany', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000007', 'c0000001-0000-0000-0000-000000000007', '+1234567896', '1991-09-12', 'France', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000008', 'c0000001-0000-0000-0000-000000000008', '+1234567897', '1993-04-25', 'Japan', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000009', 'c0000001-0000-0000-0000-000000000009', '+1234567898', '1987-12-08', 'Brazil', NOW(), NOW()),
('d0000001-0000-0000-0000-000000000010', 'c0000001-0000-0000-0000-000000000010', '+1234567899', '1996-06-18', 'Thailand', NOW(), NOW());

-- =============================================
-- 3. ORGANIZER PROFILES
-- =============================================
INSERT INTO organizer_profiles (id, user_id, organization_name, website, created_at, updated_at) VALUES
('e0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000001', 'Smith Events Co.', 'https://smithevents.com', NOW(), NOW()),
('e0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000002', 'Sarah Productions', 'https://sarahprod.com', NOW(), NOW()),
('e0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000003', 'Mike Live Entertainment', 'https://mikelive.com', NOW(), NOW()),
('e0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000004', 'Emma Concert Hall', 'https://emmaconcerts.com', NOW(), NOW()),
('e0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000005', 'TechConf Global', 'https://techconfglobal.com', NOW(), NOW());

-- =============================================
-- 4. CATEGORIES
-- =============================================
INSERT INTO categories (id, name, slug, description, icon, "order", is_active, created_at, updated_at) VALUES
('f0000001-0000-0000-0000-000000000001', 'Music', 'music', 'Concerts, festivals, and live performances', 'music', 1, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000002', 'Technology', 'technology', 'Tech conferences, workshops, and meetups', 'laptop', 2, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000003', 'Business', 'business', 'Business conferences, networking, and seminars', 'briefcase', 3, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000004', 'Sports', 'sports', 'Sports events, tournaments, and fitness', 'trophy', 4, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000005', 'Arts', 'arts', 'Art exhibitions, theater, and cultural events', 'palette', 5, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000006', 'Food & Drink', 'food-drink', 'Food festivals, wine tastings, and culinary events', 'utensils', 6, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000007', 'Health', 'health', 'Wellness retreats, yoga, and health workshops', 'heart', 7, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000008', 'Education', 'education', 'Workshops, courses, and educational seminars', 'book', 8, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000009', 'Community', 'community', 'Local meetups, charity events, and social gatherings', 'users', 9, true, NOW(), NOW()),
('f0000001-0000-0000-0000-000000000010', 'Entertainment', 'entertainment', 'Comedy shows, gaming events, and entertainment', 'star', 10, true, NOW(), NOW());

-- =============================================
-- 5. TAGS
-- =============================================
INSERT INTO tags (id, name, slug, description, created_at) VALUES
('g0000001-0000-0000-0000-000000000001', 'Outdoor', 'outdoor', 'Outdoor events', NOW()),
('g0000001-0000-0000-0000-000000000002', 'Indoor', 'indoor', 'Indoor events', NOW()),
('g0000001-0000-0000-0000-000000000003', 'Free', 'free', 'Free admission events', NOW()),
('g0000001-0000-0000-0000-000000000004', 'Family Friendly', 'family-friendly', 'Suitable for families', NOW()),
('g0000001-0000-0000-0000-000000000005', 'Networking', 'networking', 'Networking opportunities', NOW()),
('g0000001-0000-0000-0000-000000000006', 'Workshop', 'workshop', 'Hands-on workshops', NOW()),
('g0000001-0000-0000-0000-000000000007', 'Conference', 'conference', 'Conference events', NOW()),
('g0000001-0000-0000-0000-000000000008', 'Festival', 'festival', 'Festival events', NOW()),
('g0000001-0000-0000-0000-000000000009', 'Live Music', 'live-music', 'Live music performances', NOW()),
('g0000001-0000-0000-0000-000000000010', 'Virtual', 'virtual', 'Online/virtual events', NOW()),
('g0000001-0000-0000-0000-000000000011', 'Beginner', 'beginner', 'Suitable for beginners', NOW()),
('g0000001-0000-0000-0000-000000000012', 'Advanced', 'advanced', 'For advanced participants', NOW()),
('g0000001-0000-0000-0000-000000000013', 'Weekend', 'weekend', 'Weekend events', NOW()),
('g0000001-0000-0000-0000-000000000014', 'Nightlife', 'nightlife', 'Night events and parties', NOW()),
('g0000001-0000-0000-0000-000000000015', 'Food Included', 'food-included', 'Food provided', NOW());

-- =============================================
-- 6. VENUES
-- =============================================
INSERT INTO venues (id, name, address, city, country, latitude, longitude, capacity, place_id, created_at, updated_at) VALUES
('h0000001-0000-0000-0000-000000000001', 'Grand Convention Center', '123 Main Street', 'New York', 'USA', 40.7128, -74.0060, 5000, 'ChIJOwg_06VPwokRYv534QaPC8g', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000002', 'Tech Hub Arena', '456 Innovation Blvd', 'San Francisco', 'USA', 37.7749, -122.4194, 2000, 'ChIJIQBpAG2ahYAR_6128GcTUEo', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000003', 'Royal Music Hall', '789 Concert Avenue', 'London', 'UK', 51.5074, -0.1278, 3000, 'ChIJdd4hrwug2EcRmSrV3Vo6llI', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000004', 'Sunrise Stadium', '321 Sports Way', 'Los Angeles', 'USA', 34.0522, -118.2437, 50000, 'ChIJE9on3F3HwoAR9AhGJW_fL-I', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000005', 'Art District Gallery', '555 Creative Lane', 'Paris', 'France', 48.8566, 2.3522, 500, 'ChIJD7fiBh9u5kcRYJSMaMOCCwQ', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000006', 'Central Park Open Air', 'Central Park', 'New York', 'USA', 40.7829, -73.9654, 10000, 'ChIJ4zGFAZpYwokRGUGph3Mf37k', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000007', 'Downtown Conference Center', '100 Business Plaza', 'Chicago', 'USA', 41.8781, -87.6298, 1500, 'ChIJ7cv00DwsDogRAMDACa2m4K8', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000008', 'Beachside Pavilion', '200 Ocean Drive', 'Miami', 'USA', 25.7617, -80.1918, 800, 'ChIJEcHIDqKw2YgRZU-t3XHylv8', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000009', 'Mountain View Resort', '500 Alpine Road', 'Denver', 'USA', 39.7392, -104.9903, 600, 'ChIJzxcfI6qAa4cR1jaKJ_j0jhE', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000010', 'Harbor Event Space', '777 Waterfront St', 'Seattle', 'USA', 47.6062, -122.3321, 1200, 'ChIJVTPokywQkFQRmtVEaUZlJRA', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000011', 'Innovation Campus', '888 Tech Park', 'Austin', 'USA', 30.2672, -97.7431, 2500, 'ChIJLwPMoJm1RIYRetVp1EtGm10', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000012', 'Historic Theater', '999 Heritage Ave', 'Boston', 'USA', 42.3601, -71.0589, 1800, 'ChIJGzE9DS1l44kRoOhiASS_fHg', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000013', 'Skyline Rooftop', '111 Tower Place', 'Dubai', 'UAE', 25.2048, 55.2708, 400, 'ChIJRcbZaklDXz4RYlEphFBu5r0', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000014', 'Garden Pavilion', '222 Nature Way', 'Singapore', 'Singapore', 1.3521, 103.8198, 700, 'ChIJdZOLiiMR2jERxPWrUs9peIg', NOW(), NOW()),
('h0000001-0000-0000-0000-000000000015', 'Cultural Center', '333 Arts District', 'Tokyo', 'Japan', 35.6762, 139.6503, 2000, 'ChIJXSModoWLGGARILWiCfeu2M0', NOW(), NOW());

-- =============================================
-- 7. EVENTS (100 events)
-- =============================================
INSERT INTO events (id, category_id, organizer_id, title, slug, description, short_description, start_date, end_date, timezone, event_type, online_url, venue_id, cover_image, status, is_featured, published_at, created_at, updated_at) VALUES

-- Music Events (1-15)
('i0000001-0000-0000-0000-000000000001', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Summer Music Festival 2025', 'summer-music-festival-2025', 'The biggest summer music festival featuring top artists from around the world. Three days of non-stop music, food, and entertainment.', 'Three days of amazing music', '2025-07-15 10:00:00', '2025-07-17 23:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/summer-fest.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000002', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Jazz Night Live', 'jazz-night-live', 'An intimate evening of jazz featuring local and international artists.', 'Smooth jazz evening', '2025-08-20 19:00:00', '2025-08-20 23:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000003', 'https://images.eventro.com/jazz-night.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000003', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Rock Concert Experience', 'rock-concert-experience', 'Feel the energy of live rock music with legendary bands performing their greatest hits.', 'Rock legends live', '2025-09-05 18:00:00', '2025-09-05 23:30:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000004', 'https://images.eventro.com/rock-concert.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000004', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Electronic Dance Music Night', 'edm-night-2025', 'The ultimate EDM experience with world-renowned DJs spinning the hottest tracks.', 'EDM all night long', '2025-10-12 21:00:00', '2025-10-13 04:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000008', 'https://images.eventro.com/edm-night.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000005', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Acoustic Unplugged Sessions', 'acoustic-unplugged-sessions', 'Intimate acoustic performances by singer-songwriters in a cozy setting.', 'Unplugged music night', '2025-08-08 19:30:00', '2025-08-08 22:30:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/acoustic.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000006', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Classical Symphony Orchestra', 'classical-symphony-orchestra', 'Experience the grandeur of classical music performed by a world-class orchestra.', 'Classical masterpieces live', '2025-11-15 19:00:00', '2025-11-15 22:00:00', 'Europe/London', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000003', 'https://images.eventro.com/symphony.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000007', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Hip Hop Block Party', 'hip-hop-block-party', 'Street style hip hop event featuring battles, performances, and graffiti art.', 'Hip hop culture celebration', '2025-09-20 14:00:00', '2025-09-20 22:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/hiphop.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000008', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Country Music Jamboree', 'country-music-jamboree', 'A celebration of country music with line dancing, BBQ, and live performances.', 'Country music fun', '2025-10-05 12:00:00', '2025-10-05 21:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000011', 'https://images.eventro.com/country.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000009', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'World Music Festival', 'world-music-festival', 'Celebrating musical traditions from every continent with diverse performances.', 'Global music celebration', '2025-08-25 11:00:00', '2025-08-26 20:00:00', 'Europe/Paris', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/world-music.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000010', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Indie Music Showcase', 'indie-music-showcase', 'Discover emerging indie artists in an intimate venue setting.', 'New indie talent', '2025-07-30 20:00:00', '2025-07-30 23:30:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000010', 'https://images.eventro.com/indie.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000011', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Latin Music Fiesta', 'latin-music-fiesta', 'Hot Latin rhythms including salsa, bachata, and reggaeton performances.', 'Latin dance party', '2025-09-12 19:00:00', '2025-09-13 02:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000008', 'https://images.eventro.com/latin.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000012', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Blues & Soul Night', 'blues-soul-night', 'Soulful blues performances that will touch your heart.', 'Blues and soul music', '2025-10-18 20:00:00', '2025-10-18 23:30:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/blues.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000013', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Piano Recital Evening', 'piano-recital-evening', 'An elegant evening featuring classical piano masterpieces.', 'Classical piano concert', '2025-11-08 19:30:00', '2025-11-08 21:30:00', 'Asia/Tokyo', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000015', 'https://images.eventro.com/piano.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000014', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000004', 'Virtual Concert Series', 'virtual-concert-series', 'Experience live music from the comfort of your home with our virtual concert series.', 'Live music online', '2025-08-15 20:00:00', '2025-08-15 22:00:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/virtual-concert', NULL, 'https://images.eventro.com/virtual-concert.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000015', 'f0000001-0000-0000-0000-000000000001', 'b0000001-0000-0000-0000-000000000003', 'Open Mic Music Night', 'open-mic-music-night', 'Show off your talent at our weekly open mic night.', 'Open mic for musicians', '2025-07-25 19:00:00', '2025-07-25 23:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/open-mic.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Technology Events (16-30)
('i0000001-0000-0000-0000-000000000016', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'TechCon Global 2025', 'techcon-global-2025', 'The premier technology conference bringing together innovators, developers, and industry leaders.', 'Global tech conference', '2025-09-10 09:00:00', '2025-09-12 18:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/techcon.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000017', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'AI & Machine Learning Summit', 'ai-ml-summit-2025', 'Deep dive into the latest advancements in artificial intelligence and machine learning.', 'AI/ML conference', '2025-10-20 09:00:00', '2025-10-21 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/ai-summit.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000018', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Web Development Bootcamp', 'web-dev-bootcamp', 'Intensive weekend bootcamp covering modern web development technologies.', 'Learn web development', '2025-08-16 09:00:00', '2025-08-17 18:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/webdev.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000019', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Cybersecurity Conference', 'cybersecurity-conf-2025', 'Learn about the latest threats and best practices in cybersecurity.', 'Security conference', '2025-11-05 09:00:00', '2025-11-06 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/cybersec.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000020', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Cloud Computing Workshop', 'cloud-computing-workshop', 'Hands-on workshop covering AWS, Azure, and Google Cloud platforms.', 'Learn cloud technologies', '2025-09-25 10:00:00', '2025-09-25 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/cloud.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000021', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Startup Tech Meetup', 'startup-tech-meetup', 'Monthly meetup for tech startup founders and enthusiasts.', 'Startup networking', '2025-08-05 18:00:00', '2025-08-05 21:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/startup.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000022', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Blockchain & Crypto Summit', 'blockchain-crypto-summit', 'Exploring the future of blockchain technology and cryptocurrency.', 'Blockchain conference', '2025-10-08 09:00:00', '2025-10-09 17:00:00', 'Asia/Singapore', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000014', 'https://images.eventro.com/blockchain.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000023', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'DevOps Days', 'devops-days-2025', 'Conference focused on DevOps practices, tools, and culture.', 'DevOps conference', '2025-09-18 09:00:00', '2025-09-19 17:00:00', 'America/Denver', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/devops.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000024', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Mobile App Development Course', 'mobile-app-dev-course', 'Learn to build iOS and Android apps from scratch.', 'Mobile dev training', '2025-08-22 09:00:00', '2025-08-24 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/mobile-dev.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000025', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Data Science Workshop', 'data-science-workshop', 'Introduction to data science with Python and R.', 'Learn data science', '2025-10-15 10:00:00', '2025-10-15 18:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/datascience.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000026', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Virtual Reality Expo', 'vr-expo-2025', 'Experience the latest in VR technology and applications.', 'VR technology showcase', '2025-11-12 10:00:00', '2025-11-13 18:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/vr-expo.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000027', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Open Source Conference', 'open-source-conf', 'Celebrating open source software and its community.', 'Open source conference', '2025-09-28 09:00:00', '2025-09-29 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000010', 'https://images.eventro.com/opensource.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000028', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Online Tech Talks', 'online-tech-talks', 'Weekly online tech talks covering various topics.', 'Virtual tech talks', '2025-08-10 18:00:00', '2025-08-10 20:00:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/tech-talks', NULL, 'https://images.eventro.com/tech-talks.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000029', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'Hackathon Weekend', 'hackathon-weekend', '48-hour hackathon with amazing prizes and mentorship.', '48-hour coding challenge', '2025-10-25 18:00:00', '2025-10-27 18:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/hackathon.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000030', 'f0000001-0000-0000-0000-000000000002', 'b0000001-0000-0000-0000-000000000005', 'UX/UI Design Conference', 'ux-ui-design-conf', 'Learn from top designers about creating amazing user experiences.', 'Design conference', '2025-11-20 09:00:00', '2025-11-21 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/uxui.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Business Events (31-45)
('i0000001-0000-0000-0000-000000000031', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Global Business Summit', 'global-business-summit', 'International business conference featuring industry leaders and networking opportunities.', 'Business leadership summit', '2025-09-15 08:00:00', '2025-09-16 18:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/business-summit.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000032', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Entrepreneurship Workshop', 'entrepreneurship-workshop', 'Learn how to start and grow your own business.', 'Start your business', '2025-08-28 09:00:00', '2025-08-28 17:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/entrepreneur.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000033', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Marketing Masterclass', 'marketing-masterclass', 'Advanced marketing strategies for the digital age.', 'Marketing strategies', '2025-10-03 10:00:00', '2025-10-03 16:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/marketing.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000034', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Finance & Investment Forum', 'finance-investment-forum', 'Expert insights on investment strategies and financial planning.', 'Investment insights', '2025-11-08 09:00:00', '2025-11-09 17:00:00', 'Europe/London', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000003', 'https://images.eventro.com/finance.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000035', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Leadership Development Program', 'leadership-development', 'Develop your leadership skills with expert guidance.', 'Leadership training', '2025-09-22 09:00:00', '2025-09-24 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/leadership.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000036', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Networking Breakfast', 'networking-breakfast', 'Start your day with valuable business connections.', 'Morning networking', '2025-08-12 07:30:00', '2025-08-12 09:30:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/networking.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000037', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Sales Strategy Conference', 'sales-strategy-conf', 'Learn winning sales strategies from top performers.', 'Sales conference', '2025-10-16 09:00:00', '2025-10-17 17:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/sales.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000038', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'HR & Talent Summit', 'hr-talent-summit', 'Best practices in human resources and talent management.', 'HR conference', '2025-11-18 09:00:00', '2025-11-19 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/hr-summit.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000039', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Real Estate Investment Seminar', 'real-estate-seminar', 'Learn about real estate investment opportunities and strategies.', 'Real estate investing', '2025-09-30 10:00:00', '2025-09-30 16:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/realestate.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000040', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Women in Business Conference', 'women-in-business', 'Empowering women entrepreneurs and business leaders.', 'Women in business', '2025-10-22 09:00:00', '2025-10-23 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/women-business.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000041', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Supply Chain Management Forum', 'supply-chain-forum', 'Innovations and best practices in supply chain management.', 'Supply chain conference', '2025-11-25 09:00:00', '2025-11-26 17:00:00', 'Asia/Singapore', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000014', 'https://images.eventro.com/supplychain.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000042', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Small Business Expo', 'small-business-expo', 'Resources and networking for small business owners.', 'Small business support', '2025-08-18 10:00:00', '2025-08-18 18:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/smallbiz.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000043', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Digital Transformation Summit', 'digital-transformation', 'Navigate the digital transformation journey for your business.', 'Digital business', '2025-10-28 09:00:00', '2025-10-29 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/digital-transform.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000044', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000001', 'Virtual Business Networking', 'virtual-business-networking', 'Connect with professionals from around the world online.', 'Online networking', '2025-09-08 14:00:00', '2025-09-08 16:00:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/business-network', NULL, 'https://images.eventro.com/virtual-network.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000045', 'f0000001-0000-0000-0000-000000000003', 'b0000001-0000-0000-0000-000000000002', 'Franchise Opportunities Expo', 'franchise-expo', 'Explore franchise opportunities from leading brands.', 'Franchise expo', '2025-11-01 10:00:00', '2025-11-02 17:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/franchise.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Sports Events (46-55)
('i0000001-0000-0000-0000-000000000046', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'City Marathon 2025', 'city-marathon-2025', 'Annual city marathon with 5K, 10K, half marathon, and full marathon options.', 'Annual marathon event', '2025-10-12 06:00:00', '2025-10-12 14:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/marathon.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000047', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Yoga in the Park', 'yoga-in-the-park', 'Free outdoor yoga sessions for all skill levels.', 'Outdoor yoga', '2025-08-09 07:00:00', '2025-08-09 09:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/yoga.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000048', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Basketball Tournament', 'basketball-tournament', '3-on-3 basketball tournament with cash prizes.', 'Basketball competition', '2025-09-06 09:00:00', '2025-09-07 18:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000004', 'https://images.eventro.com/basketball.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000049', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Golf Championship', 'golf-championship', 'Amateur golf championship at a prestigious course.', 'Golf tournament', '2025-10-18 07:00:00', '2025-10-19 18:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/golf.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000050', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'CrossFit Competition', 'crossfit-competition', 'Test your fitness at our annual CrossFit competition.', 'CrossFit challenge', '2025-09-20 08:00:00', '2025-09-20 17:00:00', 'America/Denver', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/crossfit.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000051', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Swimming Championship', 'swimming-championship', 'Regional swimming championship for all age groups.', 'Swimming competition', '2025-08-23 08:00:00', '2025-08-24 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000008', 'https://images.eventro.com/swimming.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000052', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Tennis Open', 'tennis-open', 'Open tennis tournament for amateur players.', 'Tennis tournament', '2025-10-04 09:00:00', '2025-10-05 18:00:00', 'Europe/London', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000003', 'https://images.eventro.com/tennis.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000053', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Cycling Tour', 'cycling-tour', '100-mile charity cycling tour through scenic routes.', 'Charity cycling', '2025-09-14 06:00:00', '2025-09-14 16:00:00', 'America/Denver', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/cycling.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000054', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Soccer League Finals', 'soccer-league-finals', 'Watch the exciting finals of the local soccer league.', 'Soccer finals', '2025-11-15 15:00:00', '2025-11-15 18:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000004', 'https://images.eventro.com/soccer.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000055', 'f0000001-0000-0000-0000-000000000004', 'b0000001-0000-0000-0000-000000000003', 'Triathlon Challenge', 'triathlon-challenge', 'Sprint and Olympic distance triathlon events.', 'Triathlon event', '2025-08-30 06:00:00', '2025-08-30 14:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000008', 'https://images.eventro.com/triathlon.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Arts Events (56-65)
('i0000001-0000-0000-0000-000000000056', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Contemporary Art Exhibition', 'contemporary-art-exhibition', 'Featuring works from emerging and established contemporary artists.', 'Modern art showcase', '2025-09-01 10:00:00', '2025-09-30 18:00:00', 'Europe/Paris', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/art-exhibition.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000057', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Photography Workshop', 'photography-workshop', 'Learn photography techniques from professional photographers.', 'Photography training', '2025-08-16 10:00:00', '2025-08-16 16:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/photography.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000058', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Theater Performance: Hamlet', 'theater-hamlet', 'Classic Shakespeare performed by acclaimed theater company.', 'Shakespeare theater', '2025-10-10 19:30:00', '2025-10-10 22:30:00', 'Europe/London', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000003', 'https://images.eventro.com/hamlet.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000059', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Sculpture Garden Tour', 'sculpture-garden-tour', 'Guided tour of the outdoor sculpture garden.', 'Sculpture tour', '2025-09-08 11:00:00', '2025-09-08 13:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/sculpture.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000060', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Painting Class for Beginners', 'painting-class-beginners', 'Learn to paint in a relaxed and fun environment.', 'Beginner painting', '2025-08-22 14:00:00', '2025-08-22 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/painting.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000061', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Film Festival', 'film-festival-2025', 'Celebrating independent films from around the world.', 'Indie film festival', '2025-11-05 10:00:00', '2025-11-10 23:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/film-festival.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000062', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Dance Performance Night', 'dance-performance-night', 'Contemporary and classical dance performances.', 'Dance showcase', '2025-10-25 19:00:00', '2025-10-25 21:30:00', 'Asia/Tokyo', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000015', 'https://images.eventro.com/dance.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000063', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Pottery Making Workshop', 'pottery-workshop', 'Hands-on pottery making experience for all levels.', 'Pottery class', '2025-09-15 10:00:00', '2025-09-15 14:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/pottery.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000064', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Street Art Walking Tour', 'street-art-tour', 'Explore the citys vibrant street art scene.', 'Street art tour', '2025-08-30 10:00:00', '2025-08-30 12:30:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/streetart.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000065', 'f0000001-0000-0000-0000-000000000005', 'b0000001-0000-0000-0000-000000000002', 'Virtual Art Gallery Tour', 'virtual-art-tour', 'Explore world-famous art collections from home.', 'Online gallery tour', '2025-10-05 15:00:00', '2025-10-05 16:30:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/art-tour', NULL, 'https://images.eventro.com/virtual-art.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Food & Drink Events (66-75)
('i0000001-0000-0000-0000-000000000066', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Food & Wine Festival', 'food-wine-festival', 'Taste the best food and wine from local vendors.', 'Food and wine tasting', '2025-09-20 12:00:00', '2025-09-21 20:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/food-wine.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000067', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Cooking Masterclass', 'cooking-masterclass', 'Learn to cook gourmet dishes from celebrity chefs.', 'Chef-led cooking class', '2025-08-14 11:00:00', '2025-08-14 14:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/cooking.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000068', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Craft Beer Festival', 'craft-beer-festival', 'Sample craft beers from over 50 local breweries.', 'Craft beer tasting', '2025-10-11 14:00:00', '2025-10-11 21:00:00', 'America/Denver', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/craftbeer.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000069', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Sushi Making Class', 'sushi-making-class', 'Learn the art of sushi making from Japanese masters.', 'Sushi workshop', '2025-09-05 18:00:00', '2025-09-05 21:00:00', 'Asia/Tokyo', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000015', 'https://images.eventro.com/sushi.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000070', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Coffee Brewing Workshop', 'coffee-brewing-workshop', 'From bean to cup: learn professional coffee brewing techniques.', 'Coffee brewing class', '2025-08-26 10:00:00', '2025-08-26 12:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000010', 'https://images.eventro.com/coffee.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000071', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Farm to Table Dinner', 'farm-to-table-dinner', 'Experience a gourmet dinner made with locally sourced ingredients.', 'Local farm dinner', '2025-10-18 18:00:00', '2025-10-18 22:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/farmtotable.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000072', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Wine Tasting Evening', 'wine-tasting-evening', 'Sample premium wines and learn about wine pairing.', 'Wine tasting event', '2025-09-12 18:00:00', '2025-09-12 21:00:00', 'Europe/Paris', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000005', 'https://images.eventro.com/wine.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000073', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'BBQ Competition', 'bbq-competition', 'Watch pitmasters compete for the best BBQ title.', 'BBQ contest', '2025-08-31 11:00:00', '2025-08-31 18:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000011', 'https://images.eventro.com/bbq.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000074', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Chocolate Making Workshop', 'chocolate-workshop', 'Create your own artisan chocolates with expert guidance.', 'Chocolate making class', '2025-11-14 14:00:00', '2025-11-14 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/chocolate.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000075', 'f0000001-0000-0000-0000-000000000006', 'b0000001-0000-0000-0000-000000000001', 'Virtual Cocktail Class', 'virtual-cocktail-class', 'Learn to make classic cocktails from home.', 'Online mixology', '2025-10-24 19:00:00', '2025-10-24 21:00:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/cocktail', NULL, 'https://images.eventro.com/cocktail.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Health & Wellness Events (76-82)
('i0000001-0000-0000-0000-000000000076', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Wellness Retreat Weekend', 'wellness-retreat-weekend', 'A rejuvenating weekend of yoga, meditation, and healthy living.', 'Weekend wellness', '2025-10-04 08:00:00', '2025-10-05 18:00:00', 'America/Denver', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000009', 'https://images.eventro.com/wellness.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000077', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Meditation Workshop', 'meditation-workshop', 'Learn meditation techniques for stress relief and mental clarity.', 'Meditation training', '2025-09-10 09:00:00', '2025-09-10 12:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000014', 'https://images.eventro.com/meditation.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000078', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Nutrition & Diet Seminar', 'nutrition-seminar', 'Expert advice on nutrition and healthy eating habits.', 'Nutrition education', '2025-08-20 10:00:00', '2025-08-20 13:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/nutrition.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000079', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Mental Health Awareness Day', 'mental-health-day', 'Breaking stigma and promoting mental health awareness.', 'Mental health event', '2025-10-10 09:00:00', '2025-10-10 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/mentalhealth.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000080', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Pilates Bootcamp', 'pilates-bootcamp', 'Intensive pilates training for core strength.', 'Pilates training', '2025-09-22 07:00:00', '2025-09-22 10:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000008', 'https://images.eventro.com/pilates.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000081', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Holistic Health Fair', 'holistic-health-fair', 'Explore alternative and holistic health practices.', 'Holistic health', '2025-11-08 10:00:00', '2025-11-08 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/holistic.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000082', 'f0000001-0000-0000-0000-000000000007', 'b0000001-0000-0000-0000-000000000002', 'Online Fitness Challenge', 'online-fitness-challenge', '30-day fitness challenge with daily workouts.', '30-day fitness', '2025-10-01 06:00:00', '2025-10-30 23:59:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/fitness', NULL, 'https://images.eventro.com/fitness.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Education Events (83-90)
('i0000001-0000-0000-0000-000000000083', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Career Development Workshop', 'career-development-workshop', 'Build skills for career advancement and job searching.', 'Career skills workshop', '2025-09-18 09:00:00', '2025-09-18 16:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/career.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000084', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Language Learning Summit', 'language-learning-summit', 'Tips and resources for learning new languages effectively.', 'Language learning', '2025-10-08 10:00:00', '2025-10-08 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/language.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000085', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Creative Writing Workshop', 'creative-writing-workshop', 'Develop your writing skills with published authors.', 'Writing workshop', '2025-08-28 14:00:00', '2025-08-28 17:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/writing.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000086', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Public Speaking Masterclass', 'public-speaking-masterclass', 'Overcome fear and become a confident public speaker.', 'Public speaking training', '2025-11-12 09:00:00', '2025-11-12 16:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/speaking.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000087', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Financial Literacy Course', 'financial-literacy-course', 'Learn essential personal finance skills.', 'Finance basics', '2025-09-25 18:00:00', '2025-09-25 21:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/finlit.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000088', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'STEM Education Fair', 'stem-education-fair', 'Inspiring the next generation of scientists and engineers.', 'STEM fair', '2025-10-26 10:00:00', '2025-10-26 17:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/stem.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000089', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Book Club Meeting', 'book-club-meeting', 'Monthly book discussion with fellow readers.', 'Book discussion', '2025-08-15 19:00:00', '2025-08-15 21:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/bookclub.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000090', 'f0000001-0000-0000-0000-000000000008', 'b0000001-0000-0000-0000-000000000005', 'Online Learning Platform Demo', 'online-learning-demo', 'Explore new tools for online education.', 'EdTech demo', '2025-09-05 14:00:00', '2025-09-05 15:30:00', 'UTC', 'ONLINE', 'https://stream.eventro.com/edtech', NULL, 'https://images.eventro.com/edtech.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),

-- Community Events (91-95)
('i0000001-0000-0000-0000-000000000091', 'f0000001-0000-0000-0000-000000000009', 'b0000001-0000-0000-0000-000000000001', 'Community Cleanup Day', 'community-cleanup-day', 'Join us to clean up local parks and neighborhoods.', 'Volunteer cleanup', '2025-09-07 08:00:00', '2025-09-07 12:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/cleanup.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000092', 'f0000001-0000-0000-0000-000000000009', 'b0000001-0000-0000-0000-000000000001', 'Charity Gala Dinner', 'charity-gala-dinner', 'Annual fundraising gala for local charities.', 'Charity fundraiser', '2025-11-22 18:00:00', '2025-11-22 23:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000001', 'https://images.eventro.com/gala.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000093', 'f0000001-0000-0000-0000-000000000009', 'b0000001-0000-0000-0000-000000000001', 'Neighborhood Block Party', 'neighborhood-block-party', 'Annual neighborhood celebration with food and fun.', 'Block party', '2025-08-23 14:00:00', '2025-08-23 20:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/blockparty.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000094', 'f0000001-0000-0000-0000-000000000009', 'b0000001-0000-0000-0000-000000000001', 'Pet Adoption Fair', 'pet-adoption-fair', 'Find your new furry friend at our adoption event.', 'Pet adoption', '2025-10-19 10:00:00', '2025-10-19 16:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/petadoption.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000095', 'f0000001-0000-0000-0000-000000000009', 'b0000001-0000-0000-0000-000000000001', 'Cultural Heritage Festival', 'cultural-heritage-festival', 'Celebrating diverse cultural traditions and heritage.', 'Cultural celebration', '2025-09-28 11:00:00', '2025-09-28 19:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000006', 'https://images.eventro.com/cultural.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),

-- Entertainment Events (96-100)
('i0000001-0000-0000-0000-000000000096', 'f0000001-0000-0000-0000-000000000010', 'b0000001-0000-0000-0000-000000000003', 'Comedy Night Live', 'comedy-night-live', 'Stand-up comedy featuring top comedians.', 'Live comedy show', '2025-08-16 20:00:00', '2025-08-16 23:00:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/comedy.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000097', 'f0000001-0000-0000-0000-000000000010', 'b0000001-0000-0000-0000-000000000003', 'Gaming Convention', 'gaming-convention-2025', 'The ultimate gaming experience with tournaments and demos.', 'Gaming convention', '2025-10-31 10:00:00', '2025-11-02 20:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/gaming.jpg', 'PUBLISHED', true, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000098', 'f0000001-0000-0000-0000-000000000010', 'b0000001-0000-0000-0000-000000000003', 'Magic Show Spectacular', 'magic-show-spectacular', 'An evening of illusions and magic tricks.', 'Magic performance', '2025-09-13 19:00:00', '2025-09-13 21:30:00', 'America/New_York', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000012', 'https://images.eventro.com/magic.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000099', 'f0000001-0000-0000-0000-000000000010', 'b0000001-0000-0000-0000-000000000003', 'Trivia Night Championship', 'trivia-night-championship', 'Test your knowledge in our monthly trivia competition.', 'Trivia competition', '2025-08-21 19:00:00', '2025-08-21 22:00:00', 'America/Chicago', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000007', 'https://images.eventro.com/trivia.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW()),
('i0000001-0000-0000-0000-000000000100', 'f0000001-0000-0000-0000-000000000010', 'b0000001-0000-0000-0000-000000000003', 'Virtual Reality Gaming Tournament', 'vr-gaming-tournament', 'Compete in VR games for prizes and glory.', 'VR gaming competition', '2025-11-29 12:00:00', '2025-11-29 20:00:00', 'America/Los_Angeles', 'IN_PERSON', NULL, 'h0000001-0000-0000-0000-000000000002', 'https://images.eventro.com/vr-gaming.jpg', 'PUBLISHED', false, NOW(), NOW(), NOW());

-- =============================================
-- 8. TICKET TYPES (for all 100 events)
-- =============================================
INSERT INTO ticket_types (id, event_id, name, price, currency, capacity, sold_count) VALUES
-- Event 1: Summer Music Festival 2025
('j0000001-0000-0000-0000-000000000001', 'i0000001-0000-0000-0000-000000000001', 'General Admission', 150.00, 'USD', 5000, 1234),
('j0000001-0000-0000-0000-000000000002', 'i0000001-0000-0000-0000-000000000001', 'VIP Pass', 350.00, 'USD', 500, 156),
('j0000001-0000-0000-0000-000000000003', 'i0000001-0000-0000-0000-000000000001', 'Backstage Access', 750.00, 'USD', 50, 12),

-- Event 2: Jazz Night Live
('j0000001-0000-0000-0000-000000000004', 'i0000001-0000-0000-0000-000000000002', 'Standard', 45.00, 'USD', 200, 89),
('j0000001-0000-0000-0000-000000000005', 'i0000001-0000-0000-0000-000000000002', 'Premium Table', 120.00, 'USD', 50, 23),

-- Event 3: Rock Concert Experience
('j0000001-0000-0000-0000-000000000006', 'i0000001-0000-0000-0000-000000000003', 'Floor Standing', 85.00, 'USD', 2000, 1567),
('j0000001-0000-0000-0000-000000000007', 'i0000001-0000-0000-0000-000000000003', 'Reserved Seating', 125.00, 'USD', 1000, 678),
('j0000001-0000-0000-0000-000000000008', 'i0000001-0000-0000-0000-000000000003', 'VIP Box', 300.00, 'USD', 100, 45),

-- Event 4: EDM Night
('j0000001-0000-0000-0000-000000000009', 'i0000001-0000-0000-0000-000000000004', 'Early Bird', 35.00, 'USD', 300, 300),
('j0000001-0000-0000-0000-000000000010', 'i0000001-0000-0000-0000-000000000004', 'General', 55.00, 'USD', 500, 234),

-- Event 5: Acoustic Unplugged
('j0000001-0000-0000-0000-000000000011', 'i0000001-0000-0000-0000-000000000005', 'Standard', 30.00, 'USD', 150, 78),

-- Event 6: Classical Symphony
('j0000001-0000-0000-0000-000000000012', 'i0000001-0000-0000-0000-000000000006', 'Orchestra', 95.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000013', 'i0000001-0000-0000-0000-000000000006', 'Balcony', 65.00, 'USD', 300, 189),

-- Event 7-15: More music events
('j0000001-0000-0000-0000-000000000014', 'i0000001-0000-0000-0000-000000000007', 'General', 25.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000015', 'i0000001-0000-0000-0000-000000000008', 'General', 40.00, 'USD', 800, 456),
('j0000001-0000-0000-0000-000000000016', 'i0000001-0000-0000-0000-000000000009', 'Day Pass', 60.00, 'USD', 1000, 567),
('j0000001-0000-0000-0000-000000000017', 'i0000001-0000-0000-0000-000000000009', 'Weekend Pass', 100.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000018', 'i0000001-0000-0000-0000-000000000010', 'General', 20.00, 'USD', 300, 145),
('j0000001-0000-0000-0000-000000000019', 'i0000001-0000-0000-0000-000000000011', 'General', 35.00, 'USD', 400, 189),
('j0000001-0000-0000-0000-000000000020', 'i0000001-0000-0000-0000-000000000012', 'General', 30.00, 'USD', 200, 98),
('j0000001-0000-0000-0000-000000000021', 'i0000001-0000-0000-0000-000000000013', 'General', 50.00, 'USD', 300, 167),
('j0000001-0000-0000-0000-000000000022', 'i0000001-0000-0000-0000-000000000014', 'Free', 0.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000023', 'i0000001-0000-0000-0000-000000000015', 'General', 15.00, 'USD', 200, 89),

-- Event 16: TechCon Global
('j0000001-0000-0000-0000-000000000024', 'i0000001-0000-0000-0000-000000000016', 'Early Bird', 299.00, 'USD', 500, 500),
('j0000001-0000-0000-0000-000000000025', 'i0000001-0000-0000-0000-000000000016', 'Regular', 499.00, 'USD', 1000, 678),
('j0000001-0000-0000-0000-000000000026', 'i0000001-0000-0000-0000-000000000016', 'VIP', 999.00, 'USD', 100, 45),

-- Event 17: AI Summit
('j0000001-0000-0000-0000-000000000027', 'i0000001-0000-0000-0000-000000000017', 'Standard', 399.00, 'USD', 600, 345),
('j0000001-0000-0000-0000-000000000028', 'i0000001-0000-0000-0000-000000000017', 'Premium', 699.00, 'USD', 200, 89),

-- Event 18-30: More tech events
('j0000001-0000-0000-0000-000000000029', 'i0000001-0000-0000-0000-000000000018', 'Full Access', 199.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000030', 'i0000001-0000-0000-0000-000000000019', 'Standard', 349.00, 'USD', 400, 234),
('j0000001-0000-0000-0000-000000000031', 'i0000001-0000-0000-0000-000000000020', 'Workshop', 149.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000032', 'i0000001-0000-0000-0000-000000000021', 'Free', 0.00, 'USD', 100, 78),
('j0000001-0000-0000-0000-000000000033', 'i0000001-0000-0000-0000-000000000022', 'Standard', 449.00, 'USD', 500, 289),
('j0000001-0000-0000-0000-000000000034', 'i0000001-0000-0000-0000-000000000023', 'Full Pass', 299.00, 'USD', 300, 167),
('j0000001-0000-0000-0000-000000000035', 'i0000001-0000-0000-0000-000000000024', 'Course', 599.00, 'USD', 30, 23),
('j0000001-0000-0000-0000-000000000036', 'i0000001-0000-0000-0000-000000000025', 'Workshop', 99.00, 'USD', 40, 28),
('j0000001-0000-0000-0000-000000000037', 'i0000001-0000-0000-0000-000000000026', 'General', 75.00, 'USD', 800, 456),
('j0000001-0000-0000-0000-000000000038', 'i0000001-0000-0000-0000-000000000027', 'Standard', 199.00, 'USD', 400, 234),
('j0000001-0000-0000-0000-000000000039', 'i0000001-0000-0000-0000-000000000028', 'Free', 0.00, 'USD', 200, 145),
('j0000001-0000-0000-0000-000000000040', 'i0000001-0000-0000-0000-000000000029', 'Participant', 25.00, 'USD', 200, 178),
('j0000001-0000-0000-0000-000000000041', 'i0000001-0000-0000-0000-000000000030', 'Standard', 249.00, 'USD', 300, 189),

-- Event 31-45: Business events
('j0000001-0000-0000-0000-000000000042', 'i0000001-0000-0000-0000-000000000031', 'Standard', 599.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000043', 'i0000001-0000-0000-0000-000000000031', 'Executive', 1299.00, 'USD', 100, 56),
('j0000001-0000-0000-0000-000000000044', 'i0000001-0000-0000-0000-000000000032', 'Full Day', 149.00, 'USD', 80, 45),
('j0000001-0000-0000-0000-000000000045', 'i0000001-0000-0000-0000-000000000033', 'Standard', 199.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000046', 'i0000001-0000-0000-0000-000000000034', 'Standard', 449.00, 'USD', 300, 189),
('j0000001-0000-0000-0000-000000000047', 'i0000001-0000-0000-0000-000000000035', 'Full Program', 899.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000048', 'i0000001-0000-0000-0000-000000000036', 'Free', 0.00, 'USD', 50, 45),
('j0000001-0000-0000-0000-000000000049', 'i0000001-0000-0000-0000-000000000037', 'Standard', 349.00, 'USD', 200, 123),
('j0000001-0000-0000-0000-000000000050', 'i0000001-0000-0000-0000-000000000038', 'Standard', 399.00, 'USD', 250, 145),
('j0000001-0000-0000-0000-000000000051', 'i0000001-0000-0000-0000-000000000039', 'Standard', 99.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000052', 'i0000001-0000-0000-0000-000000000040', 'Standard', 299.00, 'USD', 400, 267),
('j0000001-0000-0000-0000-000000000053', 'i0000001-0000-0000-0000-000000000041', 'Standard', 549.00, 'USD', 300, 178),
('j0000001-0000-0000-0000-000000000054', 'i0000001-0000-0000-0000-000000000042', 'Free', 0.00, 'USD', 200, 156),
('j0000001-0000-0000-0000-000000000055', 'i0000001-0000-0000-0000-000000000043', 'Standard', 399.00, 'USD', 350, 234),
('j0000001-0000-0000-0000-000000000056', 'i0000001-0000-0000-0000-000000000044', 'Free', 0.00, 'USD', 100, 89),
('j0000001-0000-0000-0000-000000000057', 'i0000001-0000-0000-0000-000000000045', 'Standard', 25.00, 'USD', 500, 345),

-- Event 46-55: Sports events
('j0000001-0000-0000-0000-000000000058', 'i0000001-0000-0000-0000-000000000046', '5K', 35.00, 'USD', 2000, 1456),
('j0000001-0000-0000-0000-000000000059', 'i0000001-0000-0000-0000-000000000046', '10K', 45.00, 'USD', 1500, 987),
('j0000001-0000-0000-0000-000000000060', 'i0000001-0000-0000-0000-000000000046', 'Half Marathon', 65.00, 'USD', 1000, 678),
('j0000001-0000-0000-0000-000000000061', 'i0000001-0000-0000-0000-000000000046', 'Full Marathon', 85.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000062', 'i0000001-0000-0000-0000-000000000047', 'Free', 0.00, 'USD', 200, 156),
('j0000001-0000-0000-0000-000000000063', 'i0000001-0000-0000-0000-000000000048', 'Team Entry', 100.00, 'USD', 32, 24),
('j0000001-0000-0000-0000-000000000064', 'i0000001-0000-0000-0000-000000000049', 'Player', 250.00, 'USD', 144, 89),
('j0000001-0000-0000-0000-000000000065', 'i0000001-0000-0000-0000-000000000050', 'Competitor', 75.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000066', 'i0000001-0000-0000-0000-000000000051', 'Swimmer', 45.00, 'USD', 200, 145),
('j0000001-0000-0000-0000-000000000067', 'i0000001-0000-0000-0000-000000000052', 'Player', 60.00, 'USD', 64, 45),
('j0000001-0000-0000-0000-000000000068', 'i0000001-0000-0000-0000-000000000053', 'Cyclist', 85.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000069', 'i0000001-0000-0000-0000-000000000054', 'General', 25.00, 'USD', 5000, 3456),
('j0000001-0000-0000-0000-000000000070', 'i0000001-0000-0000-0000-000000000055', 'Sprint', 95.00, 'USD', 200, 134),
('j0000001-0000-0000-0000-000000000071', 'i0000001-0000-0000-0000-000000000055', 'Olympic', 145.00, 'USD', 100, 67),

-- Event 56-65: Arts events
('j0000001-0000-0000-0000-000000000072', 'i0000001-0000-0000-0000-000000000056', 'General', 20.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000073', 'i0000001-0000-0000-0000-000000000057', 'Workshop', 75.00, 'USD', 20, 15),
('j0000001-0000-0000-0000-000000000074', 'i0000001-0000-0000-0000-000000000058', 'Standard', 55.00, 'USD', 400, 289),
('j0000001-0000-0000-0000-000000000075', 'i0000001-0000-0000-0000-000000000058', 'Premium', 95.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000076', 'i0000001-0000-0000-0000-000000000059', 'Free', 0.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000077', 'i0000001-0000-0000-0000-000000000060', 'Class', 45.00, 'USD', 20, 16),
('j0000001-0000-0000-0000-000000000078', 'i0000001-0000-0000-0000-000000000061', 'Day Pass', 25.00, 'USD', 1000, 567),
('j0000001-0000-0000-0000-000000000079', 'i0000001-0000-0000-0000-000000000061', 'Full Festival', 75.00, 'USD', 500, 289),
('j0000001-0000-0000-0000-000000000080', 'i0000001-0000-0000-0000-000000000062', 'General', 40.00, 'USD', 300, 189),
('j0000001-0000-0000-0000-000000000081', 'i0000001-0000-0000-0000-000000000063', 'Workshop', 65.00, 'USD', 15, 12),
('j0000001-0000-0000-0000-000000000082', 'i0000001-0000-0000-0000-000000000064', 'Walking Tour', 20.00, 'USD', 25, 18),
('j0000001-0000-0000-0000-000000000083', 'i0000001-0000-0000-0000-000000000065', 'Free', 0.00, 'USD', 200, 156),

-- Event 66-75: Food events
('j0000001-0000-0000-0000-000000000084', 'i0000001-0000-0000-0000-000000000066', 'Tasting Pass', 65.00, 'USD', 1000, 678),
('j0000001-0000-0000-0000-000000000085', 'i0000001-0000-0000-0000-000000000066', 'VIP Tasting', 125.00, 'USD', 200, 134),
('j0000001-0000-0000-0000-000000000086', 'i0000001-0000-0000-0000-000000000067', 'Class', 150.00, 'USD', 20, 18),
('j0000001-0000-0000-0000-000000000087', 'i0000001-0000-0000-0000-000000000068', 'Tasting', 45.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000088', 'i0000001-0000-0000-0000-000000000069', 'Class', 120.00, 'USD', 12, 10),
('j0000001-0000-0000-0000-000000000089', 'i0000001-0000-0000-0000-000000000070', 'Workshop', 35.00, 'USD', 20, 16),
('j0000001-0000-0000-0000-000000000090', 'i0000001-0000-0000-0000-000000000071', 'Dinner', 175.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000091', 'i0000001-0000-0000-0000-000000000072', 'Tasting', 85.00, 'USD', 40, 28),
('j0000001-0000-0000-0000-000000000092', 'i0000001-0000-0000-0000-000000000073', 'Spectator', 15.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000093', 'i0000001-0000-0000-0000-000000000074', 'Workshop', 95.00, 'USD', 15, 12),
('j0000001-0000-0000-0000-000000000094', 'i0000001-0000-0000-0000-000000000075', 'Virtual', 25.00, 'USD', 100, 67),

-- Event 76-82: Health events
('j0000001-0000-0000-0000-000000000095', 'i0000001-0000-0000-0000-000000000076', 'Full Retreat', 499.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000096', 'i0000001-0000-0000-0000-000000000077', 'Workshop', 45.00, 'USD', 30, 23),
('j0000001-0000-0000-0000-000000000097', 'i0000001-0000-0000-0000-000000000078', 'Seminar', 35.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000098', 'i0000001-0000-0000-0000-000000000079', 'Free', 0.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000099', 'i0000001-0000-0000-0000-000000000080', 'Class', 25.00, 'USD', 30, 23),
('j0000001-0000-0000-0000-000000000100', 'i0000001-0000-0000-0000-000000000081', 'General', 15.00, 'USD', 300, 189),
('j0000001-0000-0000-0000-000000000101', 'i0000001-0000-0000-0000-000000000082', 'Challenge', 29.00, 'USD', 200, 145),

-- Event 83-90: Education events
('j0000001-0000-0000-0000-000000000102', 'i0000001-0000-0000-0000-000000000083', 'Workshop', 79.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000103', 'i0000001-0000-0000-0000-000000000084', 'Full Day', 99.00, 'USD', 100, 67),
('j0000001-0000-0000-0000-000000000104', 'i0000001-0000-0000-0000-000000000085', 'Workshop', 55.00, 'USD', 25, 18),
('j0000001-0000-0000-0000-000000000105', 'i0000001-0000-0000-0000-000000000086', 'Masterclass', 199.00, 'USD', 40, 28),
('j0000001-0000-0000-0000-000000000106', 'i0000001-0000-0000-0000-000000000087', 'Course', 49.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000107', 'i0000001-0000-0000-0000-000000000088', 'Free', 0.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000108', 'i0000001-0000-0000-0000-000000000089', 'Free', 0.00, 'USD', 30, 23),
('j0000001-0000-0000-0000-000000000109', 'i0000001-0000-0000-0000-000000000090', 'Free', 0.00, 'USD', 200, 145),

-- Event 91-95: Community events
('j0000001-0000-0000-0000-000000000110', 'i0000001-0000-0000-0000-000000000091', 'Free', 0.00, 'USD', 500, 234),
('j0000001-0000-0000-0000-000000000111', 'i0000001-0000-0000-0000-000000000092', 'Standard', 150.00, 'USD', 300, 234),
('j0000001-0000-0000-0000-000000000112', 'i0000001-0000-0000-0000-000000000092', 'VIP Table', 500.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000113', 'i0000001-0000-0000-0000-000000000093', 'Free', 0.00, 'USD', 500, 345),
('j0000001-0000-0000-0000-000000000114', 'i0000001-0000-0000-0000-000000000094', 'Free', 0.00, 'USD', 300, 234),
('j0000001-0000-0000-0000-000000000115', 'i0000001-0000-0000-0000-000000000095', 'Free', 0.00, 'USD', 1000, 678),

-- Event 96-100: Entertainment events
('j0000001-0000-0000-0000-000000000116', 'i0000001-0000-0000-0000-000000000096', 'General', 35.00, 'USD', 200, 156),
('j0000001-0000-0000-0000-000000000117', 'i0000001-0000-0000-0000-000000000096', 'VIP', 75.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000118', 'i0000001-0000-0000-0000-000000000097', 'Day Pass', 55.00, 'USD', 2000, 1456),
('j0000001-0000-0000-0000-000000000119', 'i0000001-0000-0000-0000-000000000097', 'Full Weekend', 120.00, 'USD', 1000, 678),
('j0000001-0000-0000-0000-000000000120', 'i0000001-0000-0000-0000-000000000098', 'General', 45.00, 'USD', 300, 234),
('j0000001-0000-0000-0000-000000000121', 'i0000001-0000-0000-0000-000000000099', 'Team', 20.00, 'USD', 50, 34),
('j0000001-0000-0000-0000-000000000122', 'i0000001-0000-0000-0000-000000000100', 'Competitor', 45.00, 'USD', 64, 45),
('j0000001-0000-0000-0000-000000000123', 'i0000001-0000-0000-0000-000000000100', 'Spectator', 15.00, 'USD', 200, 134);

-- =============================================
-- 9. EVENT TAGS (connecting events to tags)
-- =============================================
INSERT INTO event_tags (event_id, tag_id) VALUES
-- Music events
('i0000001-0000-0000-0000-000000000001', 'g0000001-0000-0000-0000-000000000001'), -- Summer Festival - Outdoor
('i0000001-0000-0000-0000-000000000001', 'g0000001-0000-0000-0000-000000000008'), -- Summer Festival - Festival
('i0000001-0000-0000-0000-000000000001', 'g0000001-0000-0000-0000-000000000009'), -- Summer Festival - Live Music
('i0000001-0000-0000-0000-000000000002', 'g0000001-0000-0000-0000-000000000002'), -- Jazz Night - Indoor
('i0000001-0000-0000-0000-000000000002', 'g0000001-0000-0000-0000-000000000009'), -- Jazz Night - Live Music
('i0000001-0000-0000-0000-000000000003', 'g0000001-0000-0000-0000-000000000002'), -- Rock Concert - Indoor
('i0000001-0000-0000-0000-000000000003', 'g0000001-0000-0000-0000-000000000009'), -- Rock Concert - Live Music
('i0000001-0000-0000-0000-000000000004', 'g0000001-0000-0000-0000-000000000014'), -- EDM - Nightlife
('i0000001-0000-0000-0000-000000000004', 'g0000001-0000-0000-0000-000000000009'), -- EDM - Live Music
('i0000001-0000-0000-0000-000000000005', 'g0000001-0000-0000-0000-000000000002'), -- Acoustic - Indoor
('i0000001-0000-0000-0000-000000000005', 'g0000001-0000-0000-0000-000000000009'), -- Acoustic - Live Music
('i0000001-0000-0000-0000-000000000006', 'g0000001-0000-0000-0000-000000000002'), -- Symphony - Indoor
('i0000001-0000-0000-0000-000000000007', 'g0000001-0000-0000-0000-000000000001'), -- Hip Hop - Outdoor
('i0000001-0000-0000-0000-000000000008', 'g0000001-0000-0000-0000-000000000001'), -- Country - Outdoor
('i0000001-0000-0000-0000-000000000008', 'g0000001-0000-0000-0000-000000000004'), -- Country - Family Friendly
('i0000001-0000-0000-0000-000000000009', 'g0000001-0000-0000-0000-000000000008'), -- World Music - Festival
('i0000001-0000-0000-0000-000000000014', 'g0000001-0000-0000-0000-000000000010'), -- Virtual Concert - Virtual

-- Tech events
('i0000001-0000-0000-0000-000000000016', 'g0000001-0000-0000-0000-000000000007'), -- TechCon - Conference
('i0000001-0000-0000-0000-000000000016', 'g0000001-0000-0000-0000-000000000005'), -- TechCon - Networking
('i0000001-0000-0000-0000-000000000017', 'g0000001-0000-0000-0000-000000000007'), -- AI Summit - Conference
('i0000001-0000-0000-0000-000000000017', 'g0000001-0000-0000-0000-000000000012'), -- AI Summit - Advanced
('i0000001-0000-0000-0000-000000000018', 'g0000001-0000-0000-0000-000000000006'), -- Web Dev - Workshop
('i0000001-0000-0000-0000-000000000018', 'g0000001-0000-0000-0000-000000000011'), -- Web Dev - Beginner
('i0000001-0000-0000-0000-000000000019', 'g0000001-0000-0000-0000-000000000007'), -- Cybersecurity - Conference
('i0000001-0000-0000-0000-000000000020', 'g0000001-0000-0000-0000-000000000006'), -- Cloud - Workshop
('i0000001-0000-0000-0000-000000000021', 'g0000001-0000-0000-0000-000000000005'), -- Startup - Networking
('i0000001-0000-0000-0000-000000000021', 'g0000001-0000-0000-0000-000000000003'), -- Startup - Free
('i0000001-0000-0000-0000-000000000028', 'g0000001-0000-0000-0000-000000000010'), -- Online Tech Talks - Virtual
('i0000001-0000-0000-0000-000000000029', 'g0000001-0000-0000-0000-000000000013'), -- Hackathon - Weekend

-- Business events
('i0000001-0000-0000-0000-000000000031', 'g0000001-0000-0000-0000-000000000007'), -- Business Summit - Conference
('i0000001-0000-0000-0000-000000000031', 'g0000001-0000-0000-0000-000000000005'), -- Business Summit - Networking
('i0000001-0000-0000-0000-000000000032', 'g0000001-0000-0000-0000-000000000006'), -- Entrepreneurship - Workshop
('i0000001-0000-0000-0000-000000000036', 'g0000001-0000-0000-0000-000000000005'), -- Networking Breakfast - Networking
('i0000001-0000-0000-0000-000000000036', 'g0000001-0000-0000-0000-000000000003'), -- Networking Breakfast - Free
('i0000001-0000-0000-0000-000000000044', 'g0000001-0000-0000-0000-000000000010'), -- Virtual Networking - Virtual

-- Sports events
('i0000001-0000-0000-0000-000000000046', 'g0000001-0000-0000-0000-000000000001'), -- Marathon - Outdoor
('i0000001-0000-0000-0000-000000000047', 'g0000001-0000-0000-0000-000000000001'), -- Yoga - Outdoor
('i0000001-0000-0000-0000-000000000047', 'g0000001-0000-0000-0000-000000000003'), -- Yoga - Free
('i0000001-0000-0000-0000-000000000047', 'g0000001-0000-0000-0000-000000000011'), -- Yoga - Beginner
('i0000001-0000-0000-0000-000000000048', 'g0000001-0000-0000-0000-000000000001'), -- Basketball - Outdoor
('i0000001-0000-0000-0000-000000000049', 'g0000001-0000-0000-0000-000000000001'), -- Golf - Outdoor

-- Arts events
('i0000001-0000-0000-0000-000000000056', 'g0000001-0000-0000-0000-000000000002'), -- Art Exhibition - Indoor
('i0000001-0000-0000-0000-000000000057', 'g0000001-0000-0000-0000-000000000006'), -- Photography - Workshop
('i0000001-0000-0000-0000-000000000057', 'g0000001-0000-0000-0000-000000000011'), -- Photography - Beginner
('i0000001-0000-0000-0000-000000000058', 'g0000001-0000-0000-0000-000000000002'), -- Theater - Indoor
('i0000001-0000-0000-0000-000000000060', 'g0000001-0000-0000-0000-000000000006'), -- Painting - Workshop
('i0000001-0000-0000-0000-000000000060', 'g0000001-0000-0000-0000-000000000011'), -- Painting - Beginner
('i0000001-0000-0000-0000-000000000061', 'g0000001-0000-0000-0000-000000000008'), -- Film Festival - Festival
('i0000001-0000-0000-0000-000000000065', 'g0000001-0000-0000-0000-000000000010'), -- Virtual Art - Virtual

-- Food events
('i0000001-0000-0000-0000-000000000066', 'g0000001-0000-0000-0000-000000000001'), -- Food Festival - Outdoor
('i0000001-0000-0000-0000-000000000066', 'g0000001-0000-0000-0000-000000000008'), -- Food Festival - Festival
('i0000001-0000-0000-0000-000000000066', 'g0000001-0000-0000-0000-000000000015'), -- Food Festival - Food Included
('i0000001-0000-0000-0000-000000000067', 'g0000001-0000-0000-0000-000000000006'), -- Cooking - Workshop
('i0000001-0000-0000-0000-000000000067', 'g0000001-0000-0000-0000-000000000015'), -- Cooking - Food Included
('i0000001-0000-0000-0000-000000000068', 'g0000001-0000-0000-0000-000000000008'), -- Beer Festival - Festival
('i0000001-0000-0000-0000-000000000069', 'g0000001-0000-0000-0000-000000000006'), -- Sushi - Workshop
('i0000001-0000-0000-0000-000000000075', 'g0000001-0000-0000-0000-000000000010'), -- Virtual Cocktail - Virtual

-- Health events
('i0000001-0000-0000-0000-000000000076', 'g0000001-0000-0000-0000-000000000001'), -- Wellness - Outdoor
('i0000001-0000-0000-0000-000000000076', 'g0000001-0000-0000-0000-000000000013'), -- Wellness - Weekend
('i0000001-0000-0000-0000-000000000077', 'g0000001-0000-0000-0000-000000000006'), -- Meditation - Workshop
('i0000001-0000-0000-0000-000000000077', 'g0000001-0000-0000-0000-000000000011'), -- Meditation - Beginner
('i0000001-0000-0000-0000-000000000079', 'g0000001-0000-0000-0000-000000000003'), -- Mental Health - Free
('i0000001-0000-0000-0000-000000000082', 'g0000001-0000-0000-0000-000000000010'), -- Online Fitness - Virtual

-- Education events
('i0000001-0000-0000-0000-000000000083', 'g0000001-0000-0000-0000-000000000006'), -- Career - Workshop
('i0000001-0000-0000-0000-000000000085', 'g0000001-0000-0000-0000-000000000006'), -- Writing - Workshop
('i0000001-0000-0000-0000-000000000085', 'g0000001-0000-0000-0000-000000000011'), -- Writing - Beginner
('i0000001-0000-0000-0000-000000000088', 'g0000001-0000-0000-0000-000000000003'), -- STEM - Free
('i0000001-0000-0000-0000-000000000088', 'g0000001-0000-0000-0000-000000000004'), -- STEM - Family Friendly
('i0000001-0000-0000-0000-000000000090', 'g0000001-0000-0000-0000-000000000010'), -- Online Learning - Virtual

-- Community events
('i0000001-0000-0000-0000-000000000091', 'g0000001-0000-0000-0000-000000000001'), -- Cleanup - Outdoor
('i0000001-0000-0000-0000-000000000091', 'g0000001-0000-0000-0000-000000000003'), -- Cleanup - Free
('i0000001-0000-0000-0000-000000000092', 'g0000001-0000-0000-0000-000000000002'), -- Gala - Indoor
('i0000001-0000-0000-0000-000000000092', 'g0000001-0000-0000-0000-000000000015'), -- Gala - Food Included
('i0000001-0000-0000-0000-000000000093', 'g0000001-0000-0000-0000-000000000001'), -- Block Party - Outdoor
('i0000001-0000-0000-0000-000000000093', 'g0000001-0000-0000-0000-000000000003'), -- Block Party - Free
('i0000001-0000-0000-0000-000000000093', 'g0000001-0000-0000-0000-000000000004'), -- Block Party - Family Friendly
('i0000001-0000-0000-0000-000000000094', 'g0000001-0000-0000-0000-000000000003'), -- Pet Adoption - Free
('i0000001-0000-0000-0000-000000000094', 'g0000001-0000-0000-0000-000000000004'), -- Pet Adoption - Family Friendly
('i0000001-0000-0000-0000-000000000095', 'g0000001-0000-0000-0000-000000000001'), -- Cultural - Outdoor
('i0000001-0000-0000-0000-000000000095', 'g0000001-0000-0000-0000-000000000008'), -- Cultural - Festival

-- Entertainment events
('i0000001-0000-0000-0000-000000000096', 'g0000001-0000-0000-0000-000000000002'), -- Comedy - Indoor
('i0000001-0000-0000-0000-000000000096', 'g0000001-0000-0000-0000-000000000014'), -- Comedy - Nightlife
('i0000001-0000-0000-0000-000000000097', 'g0000001-0000-0000-0000-000000000002'), -- Gaming - Indoor
('i0000001-0000-0000-0000-000000000097', 'g0000001-0000-0000-0000-000000000013'), -- Gaming - Weekend
('i0000001-0000-0000-0000-000000000098', 'g0000001-0000-0000-0000-000000000002'), -- Magic - Indoor
('i0000001-0000-0000-0000-000000000098', 'g0000001-0000-0000-0000-000000000004'), -- Magic - Family Friendly
('i0000001-0000-0000-0000-000000000099', 'g0000001-0000-0000-0000-000000000002'), -- Trivia - Indoor
('i0000001-0000-0000-0000-000000000099', 'g0000001-0000-0000-0000-000000000014'), -- Trivia - Nightlife
('i0000001-0000-0000-0000-000000000100', 'g0000001-0000-0000-0000-000000000002'); -- VR Gaming - Indoor

-- =============================================
-- END OF SEED DATA
-- =============================================

```