/**
 * wedding-data.js — Customer-facing editable data layer for Darees Invitation
 * Couple: Tasneem & Mohammed
 * Event: Darees
 * Date: Saturday, September 25, 2027 at 7:00 PM
 * Venue: Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)
 * Music: Mast Magan (Instrumental)
 */

window.WEDDING_DATA = {
  bride: "Tasneem",
  groom: "Mohammed",
  kicker: "Darees Mubarak",
  invitationLine: "Together with their families, cordially invite you to the auspicious Darees",
  dateLabel: "Saturday, September 25, 2027",
  shortDate: "25 . 09 . 2027",
  countdownTarget: "2027-09-25T19:00:00-04:00",
  countdownLabel: "Until the Darees",

  storyKicker: "Bismillah hir-Rahman nir-Rahim",
  storyTitle: "A Sacred Celebration of Blessings",
  story: [
    "With the benevolence of the Almighty Allah Subhanahu wa Ta'ala and the noble blessings of our elders, we gather in prayer, gratitude, and joyous celebration for the auspicious Darees of Mohammed & Tasneem.",
    "Your esteemed presence, blessings, and heartfelt prayers will grace our celebration with warmth, joy, and barakah as we embark on this sacred journey together.",
  ],

  eventsKicker: "Auspicious Gathering",
  eventsTitle: "Darees Mubarak",
  eventsSubtitle: "An evening of prayers, Salawaat, and Khushi nu Jaman celebrations.",

  events: [
    {
      name: "Darees",
      date: "Saturday, 25 September 2027",
      time: "7:00 PM",
      venue: "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)\n8929 Bayview Ave, Richmond Hill, ON L4B 4W4",
      note: "Darees Mubarak followed by Khushi nu Jaman & blessings.",
    },
  ],

  venue: {
    name: "Dawoodi Bohra Al Masjid Al Saifee Anjuman-e-Burhani (Toronto)",
    address: "8929 Bayview Ave, Richmond Hill, ON L4B 4W4, Canada",
    hint: "Richmond Hill, Ontario (Greater Toronto Area)",
    mapsUrl: "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x882b2b134584162d:0x626df4acd8863f41?entry=s&sa=X&ved=2ahUKEwjX0_KwwaCXAxVgw_ACHbqlEvYQ4kB6BAgDEAA&hl=en",
    mapEmbed: "https://www.google.com/maps?q=8929+Bayview+Ave,+Richmond+Hill,+ON+L4B+4W4&output=embed",
  },

  rsvp: {
    email: "pookkanvazhi@gmail.com",
    whatsapp: "",
    heading: "RSVP",
    subheading: "Kindly respond to honour us with your presence at the Darees Mubarak",
    deadline: "Saturday, September 11, 2027",
  },

  closing: "With prayers, love, and gratitude, we eagerly await your presence.",

  media: {
    petals: "./editable/assets/petals.png",
    hall: "./editable/assets/hall.png",
    cover: "./editable/assets/cover.png",
    introVideo: "./editable/assets/intro.mp4",
    coupleVideo: "./editable/assets/couple.mp4",
    divider: "./editable/assets/divider.png",
    floral: "./editable/assets/floral.png",
    audio: "./editable/assets/mast-magan-instrumental.mp3",
    songTitle: "Mast Magan (Instrumental)",
    playAfterWords: true,
  },
};
