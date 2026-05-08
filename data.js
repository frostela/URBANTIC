// ============================================================
//  URBANTIC — data.js
//  Single source of truth for all property listings.
//  Card HTML uses the EXACT same structure as the original
//  script.js so style.css needs zero changes.
// ============================================================

const PROPERTIES = [
  {
    id: 1,
    title: "Japanese Minka Townhouse",
    location: "New Town Central Road, Kolkata",
    beds: 3, baths: 2, parking: 1, sqft: 1800,
    price: "₹ 20,120", type: "rent",
    category: "all",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    description: "A beautifully crafted Japanese-style townhouse on New Town Central Road. The interiors feature warm wooden textures, shoji-inspired partitions, and a compact zen courtyard. Fully furnished and move-in ready — a truly unique rental in Kolkata.",
    about: "This Japanese Minka-style townhouse is thoughtfully designed to offer a clean, aesthetic, and comfortable living experience. Located on New Town Central Road, Kolkata, it provides a serene environment away from the city's hustle while keeping you connected to every convenience. The space is meticulously maintained and perfectly suited for professionals or couples seeking something distinct.",
    images: [
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.35!2d88.4594!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027171b42a5b43%3A0x4d86abf22c8c1a32!2sNew%20Town%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000000",
  },
  {
    id: 2,
    title: "Modern Studio Apartment",
    location: "Salt Lake Sector V, Kolkata",
    beds: 1, baths: 1, parking: 1, sqft: 650,
    price: "₹ 12,500", type: "rent",
    category: "all",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    description: "A bright, modern studio in Sector V — Kolkata's IT hub. Walking distance to offices, cafes, and the metro. Fully furnished with high-speed internet, smart TV, and washing machine included.",
    about: "This studio apartment is ideal for IT professionals relocating to Kolkata's tech corridor. The building has 24-hour security, power backup, and a rooftop common area. Available on a flexible 11-month lease with option to renew. Zero brokerage through Urbantic.",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2!2d88.4315!3d22.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5b8a7e3cf%3A0x5a6b5f8b1e2d3c4a!2sSalt%20Lake%20Sector%20V%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000001",
  },
  {
    id: 3,
    title: "Heritage Villa with Garden",
    location: "Alipore, Kolkata",
    beds: 5, baths: 4, parking: 3, sqft: 4200,
    price: "₹ 85,000", type: "rent",
    category: "villa",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    description: "A beautifully restored heritage villa in Alipore — Kolkata's most prestigious address. Retains original high ceilings and Burmese teak woodwork while integrating modern conveniences seamlessly.",
    about: "Set on a generous plot in the leafy lanes of Alipore, this independent villa blends colonial character with contemporary comfort. The ground floor features formal living and dining rooms, a modern kitchen, and a guest bedroom. Upper floors host four more bedrooms with en-suite baths. A private garden and rear garage complete this exceptional property.",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=85",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1!2d88.3376!3d22.5271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f1e2d3c4a5%3A0x2a3b4c5d6e7f8a9b!2sAlipore%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000002",
  },
  {
    id: 4,
    title: "Cozy 2BHK Flat",
    location: "Tollygunge, Kolkata",
    beds: 2, baths: 1, parking: 1, sqft: 950,
    price: "₹ 18,000", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    description: "A cozy, well-maintained 2BHK in one of South Kolkata's most connected neighbourhoods. Walking distance to Tollygunge Metro, major hospitals, and Golpark market. Ideal for small families and working professionals.",
    about: "This 2BHK on the 3rd floor of a quiet residential building comes with semi-furnished interiors, an attached balcony, and 24-hour water supply. The locality is peaceful yet extremely well-connected, making it one of the best-value rentals in South Kolkata right now.",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=85",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1!2d88.3312!3d22.5025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027739b9f1e2d5%3A0x3c4d5e6f7a8b9c0d!2sTollygunge%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000003",
  },
  {
    id: 5,
    title: "Penthouse with Terrace",
    location: "Park Street, Kolkata",
    beds: 4, baths: 3, parking: 2, sqft: 3100,
    price: "₹ 1,20,000", type: "new",
    category: "all",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    description: "A rare Park Street penthouse with a sprawling private terrace and unobstructed city views. Four bedrooms, three designer bathrooms, and a chef's kitchen — Kolkata's ultimate urban address.",
    about: "Occupying the entire top floor of a boutique building on Park Street, this penthouse has been custom-finished with imported fittings, a home automation system, and a private terrace garden. Secure basement parking for two cars. Ideal for executives or anyone seeking an iconic Kolkata address.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4!2d88.3479!3d22.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c8b9e7d5f3%3A0x9a8b7c6d5e4f3a2b!2sPark%20Street%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000004",
  },
  {
    id: 6,
    title: "Compact Office Space",
    location: "Rajarhat, Kolkata",
    beds: 0, baths: 2, parking: 2, sqft: 1100,
    price: "₹ 35,000", type: "sale",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    description: "A well-fitted commercial office space in Rajarhat's fast-growing business district. Open-plan layout with two private cabins, a reception area, and a kitchenette. Ideal for startups and small teams.",
    about: "Situated in a Grade-A commercial complex in Rajarhat, this office benefits from excellent road connectivity, proximity to New Town Metro, and a thriving business community. High-speed fibre infrastructure, central AC, and round-the-clock access included. A smart buy for investors and business owners alike.",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9!2d88.4789!3d22.5832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272b2d8e7f1a3%3A0x7c8d9e0f1a2b3c4d!2sRajarhat%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000005",
  },
  {
    id: 7,
    title: "Luxury Villa with Pool",
    location: "Alipore, Kolkata",
    beds: 5, baths: 4, parking: 3, sqft: 4500,
    price: "₹ 85,000", type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=600&q=80",
    description: "An exceptional independent villa with a private swimming pool in Alipore. The property features a landscaped garden, home theatre, and a rooftop terrace — Kolkata's finest address for the discerning buyer.",
    about: "Located in one of Alipore's most exclusive lanes, this villa is a statement of refined luxury. Every detail has been curated — from the infinity pool to the double-height entrance foyer clad in imported marble. Staff quarters, a 3-car garage, solar panels, and rainwater harvesting make this a future-ready estate.",
    images: [
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1!2d88.3376!3d22.5271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f1e2d3c4a5%3A0x2a3b4c5d6e7f8a9b!2sAlipore%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000006",
  },
  {
    id: 8,
    title: "Spacious Garden Villa",
    location: "Ballygunge, Kolkata",
    beds: 4, baths: 3, parking: 2, sqft: 3800,
    price: "₹ 65,000", type: "rent",
    category: "villa",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    description: "A spacious 4-bedroom villa with a sprawling garden in the heart of Ballygunge. High ceilings, teak flooring, and a wrap-around verandah give this home timeless character. Available for rent on a long-term lease.",
    about: "This independently standing villa on a quiet Ballygunge lane offers rare privacy in the middle of the city. The lush garden is ideal for families with children. The property includes a separate servant quarter, covered parking for two cars, and is within walking distance of top schools and hospitals.",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.1!2d88.3631!3d22.5271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277f3c8b9e7d5%3A0x2a3b4c5d6e7f8a9b!2sBallygunge%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000007",
  },
  {
    id: 9,
    title: "Modern Heritage Villa",
    location: "Jodhpur Park, Kolkata",
    beds: 6, baths: 5, parking: 3, sqft: 5200,
    price: "₹ 1,10,000", type: "sale",
    category: "villa",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
    description: "A grand 6-bedroom heritage villa in Jodhpur Park, seamlessly blending colonial architecture with modern interiors. Expansive rooms, a private pool, and a landscaped garden make this a one-of-a-kind offering.",
    about: "This landmark property in Jodhpur Park has been painstakingly restored to its original grandeur while incorporating contemporary amenities. The property spans three floors with a basement recreation room, rooftop lounge, and staff quarters. One of the rarest properties to come to market in South Kolkata.",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8!2d88.3519!3d22.5131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027721e2b3c4d5%3A0x4e5f6a7b8c9d0e1f!2sJodhpur%20Park%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000008",
  },
  {
    id: 10,
    title: "Cozy 2BHK Apartment",
    location: "Salt Lake Sector V, Kolkata",
    beds: 2, baths: 1, parking: 1, sqft: 950,
    price: "₹ 18,000", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80",
    description: "A well-maintained 2BHK in Sector V with easy access to IT parks, the metro, and shopping centres. Freshly renovated with new flooring, modular kitchen, and modern fixtures throughout.",
    about: "This 2BHK on the 5th floor offers uninterrupted views of the surrounding greenery. The gated complex includes a swimming pool, gym, and 24-hour security. Covered parking and power backup are standard. Available from the 1st of next month — schedule a site visit today.",
    images: [
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=85",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=85",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2!2d88.4315!3d22.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5b8a7e3cf%3A0x5a6b5f8b1e2d3c4a!2sSalt%20Lake%20Sector%20V%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000009",
  },
  {
    id: 11,
    title: "Modern 2BHK Flat",
    location: "Tollygunge, Kolkata",
    beds: 2, baths: 2, parking: 1, sqft: 1100,
    price: "₹ 22,000", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    description: "A modern 2BHK flat with two attached bathrooms and a large living area in one of South Kolkata's most popular neighbourhoods. Well-ventilated with cross breeze and ample natural light throughout the day.",
    about: "Located on a tree-lined street in Tollygunge, this flat is within a 10-minute walk of the Metro and close to excellent schools and hospitals. The building is owner-maintained with good water pressure, lift access, and a cooperative neighbourhood. Long-term tenants preferred.",
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=85",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=1200&q=85",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=85",
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.1!2d88.3312!3d22.5025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027739b9f1e2d5%3A0x3c4d5e6f7a8b9c0d!2sTollygunge%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000010",
  },
  {
    id: 12,
    title: "Furnished 2BHK Studio",
    location: "Rajarhat, Kolkata",
    beds: 2, baths: 1, parking: 1, sqft: 880,
    price: "₹ 15,500", type: "rent",
    category: "2bhk",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
    description: "A fully furnished 2BHK in Rajarhat's growing residential corridor. All furniture, appliances, and fittings included. Simply bring your bags and move in — ideal for professionals on short-term assignments.",
    about: "This turnkey 2BHK is managed by a professional property management company, ensuring prompt maintenance and clean handover. The complex has a gym, co-working lounge, and a rooftop garden. Rajarhat's excellent road network means easy access to New Town, the airport, and EM Bypass.",
    images: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=85",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=85",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9!2d88.4789!3d22.5832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272b2d8e7f1a3%3A0x7c8d9e0f1a2b3c4d!2sRajarhat%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000011",
  },
  {
    id: 13,
    title: "Spacious 3BHK Apartment",
    location: "Park Street, Kolkata",
    beds: 3, baths: 2, parking: 1, sqft: 1600,
    price: "₹ 38,000", type: "rent",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    description: "A spacious 3BHK on a high floor in a prestigious Park Street building. Unobstructed skyline views, premium finishes, and a large balcony perfect for evening gatherings.",
    about: "This 3BHK is located in one of Park Street's most reputable residential towers with lift access, 24-hour security, and a well-maintained lobby. The apartment is semi-furnished with quality fittings. Walking distance to restaurants, schools, and cultural landmarks that make Park Street iconic.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=1200&q=85",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.4!2d88.3479!3d22.5535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277c8b9e7d5f3%3A0x9a8b7c6d5e4f3a2b!2sPark%20Street%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000012",
  },
  {
    id: 14,
    title: "Premium 3BHK Penthouse",
    location: "Elgin Road, Kolkata",
    beds: 3, baths: 3, parking: 2, sqft: 2100,
    price: "₹ 55,000", type: "sale",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80",
    description: "A premium top-floor 3BHK penthouse on Elgin Road with private terrace access and 360-degree city views. Three en-suite bathrooms, a chef's kitchen, and a home office space — designed for the modern executive.",
    about: "This penthouse in Elgin Road represents the pinnacle of central Kolkata living. The double-height living room, imported marble finishes, and state-of-the-art kitchen make it a true statement home. Two secure basement parking spots, concierge service, and rooftop access add to the lifestyle.",
    images: [
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.2!2d88.3512!3d22.5416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d9e8f1a2b3%3A0x5c6d7e8f9a0b1c2d!2sElgin%20Road%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000013",
  },
  {
    id: 15,
    title: "3BHK Corner Flat",
    location: "Behala, Kolkata",
    beds: 3, baths: 2, parking: 1, sqft: 1450,
    price: "₹ 29,000", type: "rent",
    category: "3bhk",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    description: "A bright corner flat in Behala with windows on three sides, ensuring excellent ventilation and light throughout. Three bedrooms, two bathrooms, and a generously sized living room make this ideal for larger families.",
    about: "This corner unit on the 6th floor of a well-managed society in Behala offers the best of suburban Kolkata living — peaceful surroundings, a strong neighbourhood community, and easy access to Diamond Harbour Road. The apartment has been freshly painted and is ready for immediate occupancy.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=85",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85",
      "https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=1200&q=85",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200&q=85",
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.8!2d88.3118!3d22.4872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027801b2c3d4e5%3A0x6d7e8f9a0b1c2d3e!2sBehala%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000014",
  },
  {
    id: 16,
    title: "Prime Office Space",
    location: "Sector V, Salt Lake, Kolkata",
    beds: 0, baths: 2, parking: 2, sqft: 1800,
    price: "₹ 45,000", type: "rent",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    description: "A prime office space in Sector V — Kolkata's premier IT and business district. Open-plan layout accommodating 20–25 workstations, two private cabins, a conference room, and a fully equipped pantry.",
    about: "Located in a Grade-A commercial tower in Sector V, this office offers prestige, connectivity, and a professional environment. The building has a shared reception, 24-hour access, dedicated power backup, and fibre internet. Surrounded by top MNCs and startups — a strategic address for any growing business.",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2!2d88.4315!3d22.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a5b8a7e3cf%3A0x5a6b5f8b1e2d3c4a!2sSalt%20Lake%20Sector%20V%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000015",
  },
  {
    id: 17,
    title: "Retail Shop Ground Floor",
    location: "Gariahat, Kolkata",
    beds: 0, baths: 1, parking: 1, sqft: 650,
    price: "₹ 28,000", type: "rent",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    description: "A high-footfall ground floor retail shop on the main Gariahat road — one of Kolkata's busiest shopping thoroughfares. Glass-frontage, excellent visibility, and a loyal customer base in the surrounding area.",
    about: "This retail unit is located on the prime stretch of Gariahat Road, steps from the famous Gariahat market. The 650 sqft space has a full glass shopfront, internal WC, and a rear storage area. Suitable for fashion retail, electronics, food & beverage, or any consumer-facing business.",
    images: [
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&q=85",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7!2d88.3621!3d22.5192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027729e1f2b3c4%3A0x7d8e9f0a1b2c3d4e!2sGariahat%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000016",
  },
  {
    id: 18,
    title: "Corporate Office Suite",
    location: "New Town, Kolkata",
    beds: 0, baths: 3, parking: 3, sqft: 3200,
    price: "₹ 90,000", type: "sale",
    category: "commercial",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&q=80",
    description: "A full-floor corporate office suite in New Town's most prestigious commercial tower. Capacity for 40–50 workstations with dedicated server room, boardroom, reception, and three executive cabins.",
    about: "This entire floor in a landmark New Town commercial tower is now available for sale. The building has a 4-star hotel-standard lobby, high-speed elevators, 100% power backup, and valet parking. Strategically located near the airport, EM Bypass, and major IT campuses — an irreplaceable investment.",
    images: [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=1200&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=85",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.35!2d88.4594!3d22.5726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027171b42a5b43%3A0x4d86abf22c8c1a32!2sNew%20Town%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000017",
  },
  {
    id: 19,
    title: "New Launch Tower A",
    location: "Action Area II, New Town, Kolkata",
    beds: 3, baths: 2, parking: 2, sqft: 1500,
    price: "₹ 42,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    description: "Be the first to live in New Town's most anticipated new launch. Tower A offers 3BHK apartments with premium finishes, a rooftop infinity pool, and landscaped podium gardens. Pre-launch pricing available now.",
    about: "This RERA-registered project by a reputed developer promises superior construction quality and on-time delivery. Tower A units are optimally planned for cross-ventilation and maximum natural light. Possession expected within 18 months. Home loan tie-ups with 5 major banks available through Urbantic.",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1724?w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.5!2d88.4956!3d22.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027245c3b1e9d7%3A0x4e5f6a7b8c9d0e1f!2sAction%20Area%20II%2C%20New%20Town%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000018",
  },
  {
    id: 20,
    title: "Sky Residency — New Project",
    location: "Rajarhat, Kolkata",
    beds: 4, baths: 3, parking: 2, sqft: 2200,
    price: "₹ 68,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=600&q=80",
    description: "Sky Residency redefines luxury living in Rajarhat. 4BHK sky homes with private decks, a clubhouse, squash court, and an Olympic-length swimming pool. Only a limited number of units remain.",
    about: "Sky Residency is a premium gated community spread across 5 acres in Rajarhat. Every unit is designed with a private deck overlooking the green buffer zone. Amenities include a full clubhouse, spa, business lounge, and a children's activity centre. RERA registered. Site visits available on weekends.",
    images: [
      "https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?w=1200&q=85",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=85",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=85",
      "https://images.unsplash.com/photo-1505873242700-f289a29e1724?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.9!2d88.4789!3d22.5832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272b2d8e7f1a3%3A0x7c8d9e0f1a2b3c4d!2sRajarhat%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000019",
  },
  {
    id: 21,
    title: "Grand New Launch Villas",
    location: "EM Bypass, Kolkata",
    beds: 5, baths: 4, parking: 3, sqft: 3600,
    price: "₹ 95,000", type: "new",
    category: "new",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    description: "Grand standalone villas launching on EM Bypass — Kolkata's most connected arterial road. Private pools, smart home automation, and a gated community with a clubhouse and 24-hour concierge.",
    about: "This landmark villa project on EM Bypass offers the rare combination of independent villa living with full community amenities. Each villa comes with a private pool, 3-car garage, rooftop terrace, and integrated smart home system. Close to major hospitals, international schools, and the Bypass flyover network. Only 12 villas in the entire project.",
    images: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&q=85",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1200&q=85",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=85",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=85",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=85",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.9!2d88.3987!3d22.5312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275f1e2d3c4b5%3A0x9a0b1c2d3e4f5a6b!2sEM%20Bypass%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1699000000020",
  },
];


// ============================================================
//  HELPERS — identical to original script.js
// ============================================================

const badgeMap = {
  rent: { cls: "badge-rent", label: "For Rent" },
  sale: { cls: "badge-sale", label: "For Sale" },
  new:  { cls: "badge-new",  label: "New Launch" },
};

const bedSVG  = `<img class="meta-icon" src="/contents/img/bed-icon.png" alt="bed-Img">`;
const bathSVG = `<img class="meta-icon" src="/contents/img/bathroom-icon.png" alt="bath-Img">`;
const sqftSVG = `<img class="meta-icon" src="/contents/img/sqft-icon.png" alt="sqft-Img">`;


// ============================================================
//  URL SLUG  — "Japanese Minka Townhouse" → "japanese-minka-townhouse"
// ============================================================

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")   // strip special chars
    .trim()
    .replace(/\s+/g, "-");           // spaces → hyphens
}

/** Find property by slug (used on detail page load) */
function findBySlug(slug) {
  return PROPERTIES.find(p => slugify(p.title) === slug) || null;
}


// ============================================================
//  NAVIGATION — URL becomes /property/japanese-minka-townhouse
// ============================================================

function goToDetail(id) {
  const p = PROPERTIES.find(x => x.id === id);
  if (!p) return;
  // Keep id in localStorage as fallback
  localStorage.setItem("urbantic_selected_id", id);
  // Navigate with clean slug URL
  window.location.href = `/details-page/details-page.html?property=${slugify(p.title)}`;
}


// ============================================================
//  BUILD CARD — exact same HTML structure as original script.js
// ============================================================

function buildCard(p) {
  const badge      = badgeMap[p.type] || badgeMap.rent;
  const priceLabel = p.type === "rent" ? "/month" : "";
  const bedMeta    = p.beds > 0
    ? `<div class="meta-item">${bedSVG} ${p.beds} Bedroom${p.beds > 1 ? "s" : ""}</div><div class="divider-line"></div>`
    : "";

  return `
    <div class="card" onclick="goToDetail(${p.id})" style="cursor:pointer;">
      <img class="card-img"
           src="${p.image}"
           alt="${p.title}"
           onerror="this.src='https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80'" />
      <span class="badge ${badge.cls}">${badge.label}</span>
      <div class="card-body">
        <div class="card-title">${p.title}</div>
        <div class="card-location">
          <div><img class="pin" src="/contents/img/location-icon.png" alt="Location"></div>
          <h3>${p.location}</h3>
        </div>
        <div class="card-meta">
          ${bedMeta}
          <div class="meta-item">${bathSVG} ${p.baths} Bathroom${p.baths > 1 ? "s" : ""}</div>
          <div class="divider-line"></div>
          <div class="meta-item">${sqftSVG} ${p.sqft.toLocaleString()} Sqft</div>
        </div>
        <div class="card-footer">
          <div class="price">${p.price}<span>${priceLabel}</span></div>
          <a class="main-button" onclick="event.stopPropagation();goToDetail(${p.id})">View Details</a>
        </div>
      </div>
    </div>`;
}


// ============================================================
//  HOME PAGE — Featured grid (#listings)
// ============================================================

function renderFeatured() {
  const el = document.getElementById("listings");
  if (!el) return;
  el.innerHTML = PROPERTIES.slice(0, 6).map(buildCard).join("");
}


// ============================================================
//  HOME PAGE — Category grid (#grid) + filter tabs
// ============================================================

function renderCategory(filter) {
  const el = document.getElementById("grid");
  if (!el) return;

  const filtered = filter === "all"
    ? PROPERTIES.filter(p => p.category === "all")
    : PROPERTIES.filter(p => p.category === filter);

  el.innerHTML = filtered.length
    ? filtered.map(buildCard).join("")
    : `<p style="color:#888;padding:40px 0;grid-column:1/-1;text-align:center;">No properties found.</p>`;
}

function initFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      renderCategory(tab.dataset.filter);
    });
  });
  renderCategory("all");
}


// ============================================================
//  DETAIL PAGE — resolve property from URL slug first,
//               fall back to localStorage id
// ============================================================

function resolveProperty() {
  // 1. Try ?property=slug in the URL
  const params = new URLSearchParams(window.location.search);
  const slug   = params.get("property");
  if (slug) {
    const p = findBySlug(slug);
    if (p) return p;
  }
  // 2. Fallback: localStorage id (handles edge cases / old links)
  const id = parseInt(localStorage.getItem("urbantic_selected_id"), 10);
  return PROPERTIES.find(x => x.id === id) || null;
}

function populateDetailPage() {
  if (!document.getElementById("gallery")) return;

  const p = resolveProperty();
  if (!p) return;

  // Keep localStorage in sync
  localStorage.setItem("urbantic_selected_id", p.id);

  // Canonicalise the URL to the slug without reloading
  const slug        = slugify(p.title);
  const canonical   = `?property=${slug}`;
  if (!window.location.search.includes(slug)) {
    history.replaceState(null, "", canonical);
  }

  // Page title
  document.title = `URBANTIC | ${p.title}`;

  // Gallery — main image
  const mainImg = document.querySelector(".gallery-main img");
  if (mainImg) mainImg.src = p.images[0];

  // Gallery — thumb images
  const thumbImgs = document.querySelectorAll(".gallery-thumb img");
  thumbImgs.forEach((img, i) => {
    img.src = p.images[i + 1] || p.images[0];
  });

  // Badge
  const badge = document.querySelector(".gallery-badge");
  if (badge) {
    badge.textContent  = p.type === "rent" ? "Rent" : p.type === "sale" ? "Sale" : "New";
    badge.style.background = p.type === "sale" ? "#1a8a2e" : p.type === "new" ? "#7c3aed" : "#EB4223";
  }

  // Location bar — preserve SVG, replace text
  const locBar = document.querySelector(".location-bar");
  if (locBar) {
    const svg = locBar.querySelector("svg");
    locBar.textContent = " " + p.location;
    if (svg) locBar.prepend(svg);
  }

  // Meta pills — replace text node only, keep SVG
  const pills    = document.querySelectorAll(".meta-pill");
  const pillData = [
    ` ${p.parking} Parking Space`,
    ` ${p.beds} Bedroom${p.beds !== 1 ? "s" : ""}`,
    ` ${p.baths} Bathroom${p.baths !== 1 ? "s" : ""}`,
    ` ${p.sqft.toLocaleString()} Sqft`,
  ];
  pills.forEach((pill, i) => {
    if (!pillData[i]) return;
    [...pill.childNodes].forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) node.remove();
    });
    pill.appendChild(document.createTextNode(pillData[i]));
  });

  // Price
  const priceMain = document.querySelector(".price-main");
  if (priceMain) {
    const label = p.type === "rent" ? "/month" : p.type === "sale" ? " (total)" : "";
    priceMain.innerHTML = `${p.price}<span>${label}</span>`;
  }

  // Description (left)
  const priceDesc = document.querySelector(".price-desc");
  if (priceDesc) priceDesc.textContent = p.description;

  // About text (right)
  const aboutText = document.querySelector(".about-text");
  if (aboutText) aboutText.textContent = p.about;

  // Sqft badge
  const sqftBadge = document.querySelector(".sqft-badge");
  if (sqftBadge) sqftBadge.textContent = `${p.sqft.toLocaleString()} Sqft`;

  // Map
  const mapIframe = document.querySelector(".map-container");
  if (mapIframe) mapIframe.src = p.mapEmbed;

  const mapLabel = document.querySelector(".map-label");
  if (mapLabel) mapLabel.textContent = p.location;

  // Expose images to lightbox
  window._lightboxImgs = p.images;
}


// ============================================================
//  LIGHTBOX
// ============================================================

window._lightboxCur = 0;

function openLightbox(i) {
  const imgs = window._lightboxImgs || [];
  if (!imgs.length) return;
  window._lightboxCur = i % imgs.length;
  const lb = document.getElementById("lightboxImg");
  if (lb) lb.src = imgs[window._lightboxCur];
  document.getElementById("lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
  document.body.style.overflow = "";
}

function closeLightboxOutside(e) {
  if (e.target === document.getElementById("lightbox")) closeLightbox();
}

function lightboxNav(dir) {
  const imgs = window._lightboxImgs || [];
  window._lightboxCur = (window._lightboxCur + dir + imgs.length) % imgs.length;
  const img = document.getElementById("lightboxImg");
  img.style.transition = "opacity .12s";
  img.style.opacity    = "0";
  setTimeout(() => {
    img.src           = imgs[window._lightboxCur];
    img.style.opacity = "1";
  }, 120);
}

document.addEventListener("keydown", e => {
  if (!document.getElementById("lightbox")) return;
  if (e.key === "Escape")     closeLightbox();
  if (e.key === "ArrowRight") lightboxNav(1);
  if (e.key === "ArrowLeft")  lightboxNav(-1);
});


// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  initFilterTabs();
  populateDetailPage();
});