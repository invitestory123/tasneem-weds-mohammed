# Customer Editing Guide — Tasneem & Mohammed Darees Invitation

Gilded palace hall Darees invitation featuring an animated tap-to-open cover, rain-of-light particle animations, Darees itinerary, Google Map embed, calendar synchronization, and background music ("Mast Magan" Instrumental).

---

## Normal Customer Changes

All routine customer edits are configured in:
→ `editable/wedding-data.js`

### 1. Couple Names & Header
Edit in `editable/wedding-data.js`:
- `bride`: Bride's first name (`"Tasneem"`)
- `groom`: Groom's first name (`"Mohammed"`)
- `kicker`: Event banner kicker (`"Darees Mubarak"`)
- `invitationLine`: Formal invitation line above names
- `closing`: Signoff message at the bottom

### 2. Dates & Countdown
Edit in `editable/wedding-data.js`:
- `dateLabel`: Formatted Darees date string (`"Saturday, September 25, 2027"`)
- `shortDate`: Compact date display (`"25 . 09 . 2027"`)
- `countdownTarget`: ISO date-time string (`"2027-09-25T19:00:00-04:00"`), drives live countdown timer & `.ics` calendar generation
- `countdownLabel`: Label for the countdown (`"Until the Darees"`)

### 3. Blessings & Story
Edit `story` array in `editable/wedding-data.js`:
- Array of narrative paragraphs detailing prayers and welcome words.

### 4. Itinerary & Events
Edit `events` array in `editable/wedding-data.js`:
- Darees event details:
  - `name`: Event name (`"Darees"`)
  - `date`: Event date (`"Saturday, 25 September 2027"`)
  - `time`: Event time (`"7:00 PM"`)
  - `venue`: Specific hall / masjid
  - `note`: Short festive description

### 5. Venue & Maps
Edit `venue` in `editable/wedding-data.js`:
- `name`: Masjid name (`"Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)"`)
- `address`: Street address (`"8929 Bayview Ave, Richmond Hill, ON L4B 4W4, Canada"`)
- `hint`: Distance / transit landmark (`"Richmond Hill, Ontario (Greater Toronto Area)"`)
- `mapsUrl`: Google Maps link
- `mapEmbed`: Google Maps iframe embed URL

### 6. RSVP & Guest Responses
Configured in `editable/wedding-data.js`:
- `rsvp.email`: Target email for RSVP notifications (`"pookkanvazhi@gmail.com"`)
- `rsvp.whatsapp`: Optional WhatsApp number to receive direct messages
- `rsvp.heading`: Section title (`"RSVP"`)
- `rsvp.subheading`: Welcoming guidance for guests
- `rsvp.deadline`: Date by which to reply

#### For Guests:
Guests submit their RSVP via **WhatsApp** or **Email** (sent to `pookkanvazhi@gmail.com`), entering their Full Name, Email Address, Attendance, and Guest Count. Guests **do not** see the Excel download button or internal logs.

#### For the Client (Private Host Portal):
The client/host can access the private Host Portal by opening the link with `?admin=true` (e.g. `https://.../?admin=true#rsvp`) or clicking the discreet "Host Portal" link in the footer:
- **Download Master Excel Sheet (.csv / .xlsx)**: Exports all recorded guest submissions into an Excel-formatted spreadsheet.
- **Copy All Guest Emails**: Copies all submitted guest emails into clipboard so the client can paste into Gmail's BCC field.
- **Compose Reminder Email Blast**: 1-click button that opens the client's email app with all guest emails in BCC and a pre-composed Darees reminder message ready to send!
- In addition, all email RSVPs are delivered directly to **`pookkanvazhi@gmail.com`** in real time as guests submit.

### 7. Media & Music
Replace files in `editable/assets/` or update paths in `wedding-data.js`:
- `audio`: Background music (`mast-magan-instrumental.mp3`)
- `songTitle`: Song title (`"Mast Magan (Instrumental)"`)
- `playAfterWords`: Set to `true` to play background music right after the first verse of the words appears on screen
- `cover`: Envelope cover illustration (`cover.png`)
- `introVideo`: Entrance opening animation (`intro.mp4`)
- `coupleVideo`: Couple loop video (`couple.mp4`)
- `hall`: Hall background architecture (`hall.png`)
- `petals`, `divider`, `floral`: Decorative ornaments

---

## Verification
Verify syntax with `node --check editable/wedding-data.js`.
