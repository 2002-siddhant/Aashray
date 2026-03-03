const mongoose = require("mongoose")
const connect = require("../connection.js");
connect()
const Listing = require("../Models/Listing.js")
const data = [
  {
    title: "Cozy Family Home",
    description: "A peaceful and comfortable family home with ample natural light.",
    price: 2400,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Modern City Apartment",
    description: "Stylish apartment located in the heart of the city with all amenities.",
    price: 3200,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Luxury Villa",
    description: "Spacious luxury villa with garden and private parking.",
    price: 8500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Budget Studio Room",
    description: "Affordable studio room ideal for students and working professionals.",
    price: 1200,
    location: "Pune",
    country: "India"
  },
  {
    title: "Beachside Cottage",
    description: "Beautiful cottage near the beach with serene views.",
    price: 5000,
    location: "Goa",
    country: "India"
  },
  {
    title: "Hill View Retreat",
    description: "Calm and scenic retreat surrounded by hills and greenery.",
    price: 4100,
    location: "Manali",
    country: "India"
  },
  {
    title: "Downtown Flat",
    description: "Well-furnished flat close to offices and shopping areas.",
    price: 3600,
    location: "Hyderabad",
    country: "India"
  },
  {
    title: "Independent House",
    description: "Spacious independent house suitable for large families.",
    price: 6000,
    location: "Chennai",
    country: "India"
  },
  {
    title: "Minimalist Apartment",
    description: "Clean and minimalist design with modern interiors.",
    price: 2800,
    location: "Ahmedabad",
    country: "India"
  },
  {
    title: "Suburban Home",
    description: "Quiet suburban home away from city noise.",
    price: 2200,
    location: "Noida",
    country: "India"
  },
  {
    title: "Tech Hub Residency",
    description: "Perfect stay for IT professionals near tech parks.",
    price: 3400,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Student Friendly PG",
    description: "Affordable and safe accommodation for students.",
    price: 1500,
    location: "Varanasi",
    country: "India"
  },
  {
    title: "Elegant Duplex",
    description: "Well-designed duplex with premium fittings.",
    price: 7200,
    location: "Gurgaon",
    country: "India"
  },
  {
    title: "Green Living Home",
    description: "Eco-friendly home with solar power and green surroundings.",
    price: 3800,
    location: "Dehradun",
    country: "India"
  },
  {
    title: "Urban Studio",
    description: "Compact studio apartment with easy metro access.",
    price: 2600,
    location: "Kolkata",
    country: "India"
  },
  {
    title: "Premium Penthouse",
    description: "High-rise penthouse with stunning city views.",
    price: 9500,
    location: "Mumbai",
    country: "India"
  },
  {
    title: "Countryside Villa",
    description: "Relaxing countryside villa with open spaces.",
    price: 4800,
    location: "Mysore",
    country: "India"
  },
  {
    title: "Business Class Stay",
    description: "Comfortable stay designed for business travelers.",
    price: 4300,
    location: "Indore",
    country: "India"
  },
  {
    title: "Heritage Home",
    description: "Traditional heritage home with classic architecture.",
    price: 3900,
    location: "Jaipur",
    country: "India"
  },
  {
    title: "Smart Living Apartment",
    description: "Smart home features with modern security systems.",
    price: 4600,
    location: "Bangalore",
    country: "India"
  },
  {
    title: "Riverside Stay",
    description: "Calm stay located near the river with fresh air.",
    price: 3100,
    location: "Rishikesh",
    country: "India"
  },
  {
    title: "Compact City Room",
    description: "Small but well-maintained room in city center.",
    price: 1800,
    location: "Patna",
    country: "India"
  },
  {
    title: "Artistic Loft",
    description: "Creative loft space with artistic interiors.",
    price: 3500,
    location: "Delhi",
    country: "India"
  },
  {
    title: "Nature Escape House",
    description: "Perfect escape surrounded by nature and silence.",
    price: 4200,
    location: "Ooty",
    country: "India"
  },
  {
    title: "Wellness Stay",
    description: "Peaceful stay ideal for yoga and meditation.",
    price: 3700,
    location: "Auroville",
    country: "India"
  },
  {
    title: "City Comfort Home",
    description: "Balanced comfort with accessibility to all facilities.",
    price: 2900,
    location: "Lucknow",
    country: "India"
  },
  {
    title: "Executive Apartment",
    description: "Designed for executives with premium furnishings.",
    price: 5200,
    location: "Chandigarh",
    country: "India"
  },
  {
    title: "Traveler’s Den",
    description: "Budget-friendly stay for frequent travelers.",
    price: 2000,
    location: "Amritsar",
    country: "India"
  },
  {
    title: "Lakeside Villa",
    description: "Luxury villa with peaceful lake views.",
    price: 7800,
    location: "Udaipur",
    country: "India"
  },
  {
    title: "Simple Living Home",
    description: "Simple and clean home for everyday living.",
    price: 2100,
    location: "Kanpur",
    country: "India"
  }
];

async function initialization(){
    try{
        const result = await Listing.insertMany(data);
        console.log("data initialized successfully")
    }
    catch(error){
        console.log(error)
    }
}
initialization()