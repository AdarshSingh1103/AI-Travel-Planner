export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Don't worry about cost",
    icon: "💎",
  },
];

export const SelectTravelList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveler",
    icon: "🙋🏾‍♀️",
    people: "1",
  },
  {
    id: 2,
    title: "A couple",
    desc: "Two travelers",
    icon: "👫🏾",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventures (3 to 5 peoples)",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers (5 to 12 peoples)",
    icon: "👩‍👩‍👦‍👦",
    people: "5 to 12 people",
  },
];

export const AI_PROMPT =
  "Generate Travel Plan for Location : {location} for {noOfDays} Days for {travelers} with a {budget} budget, Give me a Hotels options list with HotelName,Hotel address,Price, hotel image url,geo coordinates,rating,descriptions and suggest itinerary with placeName,Place Details,Place Image Url, Geo Coordinates,ticket Pricing,rating,Time travel each of the location for {noOfdays} day with each plan with best time to visit in JSON format. Kindly note the price should be in USD";
