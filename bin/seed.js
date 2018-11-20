const mongoose = require("mongoose");

const Culture = require("../models/culture-model");

mongoose
  .connect(
    "mongodb://localhost/incredible-india",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

// const cityData = [
//   //     {
//   //       placeName: "The Place of Suicidal Birds",
//   //       cityName:"Jatinga,Asam",
//   //       description:" During dark and foggy nights in monsoons, migratory birds flying over the village, dive headlong into trees, buildings, poles, and what nots, crashing to death. Jatinga is one of those strange places to visit in India that turns into a land of mass bird suicide every year during September & October",
//   //       placeCategory:"Mysterious",
//   //       images: ["https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2015/12/jatinga-assam.jpg"]
//   //     },

//   //   {
//   //     placeName: "The Hanging Pillar",
//   //     cityName:"Lepakshi,Andhra Pradesh",
//   //     description:"Among the 70 pillars at the site, one is hanging in mid-air, that is, it exists without a support. People come to the temple and pass objects under the pillar, believing it’ll bring prosperity into their lives!",

//   //    placeCategory:"Mysterious",
//   //     images:["https://static2.tripoto.com/media/filter/nl/img/461431/TripDocument/1509991003_lepakshi1.jpg",
//   //             "https://2.bp.blogspot.com/-5RcidHl2sBg/WRFyL9WjqyI/AAAAAAAACmQ/DHTeBqy91kYRv6m8SylLUcDqwppc3UEaQCLcB/s1600/Hanging_Pillar_Lepakshi_Temple_India_Wonder_Antigravity_Levitation.jpg",
//   //             "https://c1.hiqcdn.com/customcdn/1300x512/destreviewimages/shareiq__1456975771.904831.jpg"
//   //   ]
//   //   },
//   //   {

//   //     placeName:"The Tale of Twins",
//   //    cityName:" Kodinhi, Kerala",
//   //   description:"Once you set foot into this village, you’ll start seeing doubles of almost everyone! Kodinhi is currently home to over 200 pair of twins and two sets of triplets. And that’s not all! Kodinhi’s women who are married outside the village also end up having twins or triplets.Doctors believe that the reason for this strange phenomenon lies in the chemicals of the water in the area.",
//   // placeCategory:"Mysterious",
//   // images:["https://i2.wp.com/eagerquestions.com/wp-content/uploads/2017/03/kodinhi-village.jpg?resize=880%2C660",
//   //         "http://1.bp.blogspot.com/-XEeFekD1tUA/VfQjVLNiHPI/AAAAAAAAAGU/VfzXdRbGwwA/s640/twins-village1_1441907872.jpg",
//   //         "https://www.sbs.com.au/yourlanguage/sites/sbs.com.au.yourlanguage/files/styles/full/public/podcast_images/getty_images_twins.jpg?itok=kwfJKVBC"
//   // ]
//   // },

//   // {
//   //   placeName:"The Gravity Defying Palace ",
//   //   cityName:"Lucknow, Uttar Pradesh",
//   // description:"This monument’s central arched hall is about 50 metres in length and almost 3 stories high…but without any pillars or beams supporting it. The main hall is also famous for its unique interlocking brick structure and for the ‘Bhulbhulaiya’, a dense maze.",
//   // placeCategory:"Mysterious",
//   // images:["http://www.holidaycraving.com/admin/images/1525770416dff.jpg",
//   // "https://www.holidaymine.com/uploads/sample1.jpg",
//   // "http://www.holidaycraving.com/admin/images/1525770404b.jpg"
//   //   ]
//   // },
//   // {
//   //   placeName:"The Magnetic Hill",
//   //   cityName:"Leh, Ladakh",
//   //   description:"The enchanting hills of Ladakh have more than mere beauty to offer. The Magnetic Hill, located at an altitude of 11,000 feet above sea level is one of the most unusual places to visit in India.The Mystery: Cars driving up the hill get pulled up of their own accord. That is, one can drive up here with the ignition of their vehicles turned off!The Theory: This exciting phenomenon is actually only an optical illusion resulting from the hill’s gravitational pull.",
//   // placeCategory:"Mysterious",
//   // images:["https://c8.alamy.com/comp/G1DNKB/birds-eye-view-of-confluence-of-indus-and-zanskar-river-at-nimu-near-G1DNKB.jpg",
//   // "https://www.budgetwayfarers.com/wp-content/uploads/2018/01/Magneti-Hill-1.jpg",
//   // "https://media.mnn.com/assets/images/2017/03/magnetic-hill.jpg.638x0_q80_crop-smart.jpg"
//   // ]

//   // },
//   // {
//   //   placeName:"Roopkund lake",
//   //   cityName: "Trishul,Uttarakhand",
//   //   description:"Roopkund Lake is a glacier lake located at an elevation of 16,500 feet in the most God forsaken place in the Himalayas. But it’s remote and dangerous location has got nothing to do with the gloom and despair associated with this lake. It’s what lies beneath it that scares the shit out of most people.The Mystery: Around 300-600 skeletons can be seen beneath the surface of the frozen Roopkund lake every year when the ice melts at this mysterious place in India. Radiocarbon tests and forensics date the corpses back to the 15th century AD. The Theory: The locals believe that the corpses belong to the then king and queen of Kanauj, who were going on a pilgrimage but plunged into the lake due to a severe hailstorm and died.",
//   //   placeCategory:"Mysterious",
//   //   images:["https://s3-ap-southeast-1.amazonaws.com/khaskhabar/khaskhabarimages/img500/1470103833-khaskhabar.jpg",
//   //   "https://indiahikes.com/wp-content/uploads/2016/07/Roopkund.jpg?x23863",
//   //   "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Roopkund_Lake.jpg/1200px-Roopkund_Lake.jpg"
//   // ]
//   // },

//   // {
//   //   placeName:"The Floating Stones",
//   //   cityName: "Rameshwaram,Tamilnadu",
//   //   description:"Rameshwaram in Tamil Nadu holds immense importance in the Hindu mythology, as it is the place where, according to Ramayana, Lord Rama’s Vanara Sena built a bridge of floating stones all the way to Sri Lanka. But there is something else about the bridge that makes this place one of the most mysterious places in India… The Mystery: According to Ramayana, the bridge was built of stones that would stay afloat once the name of Lord Rama was scribbled on it. As it turns out, this wasn’t just a story. The bridge was actually made of such stones, as they are still found around here and are a major tourist attraction in Rameshwaram.",
//   //   placeCategory:"Mysterious",
//   //   images:["https://i.pinimg.com/originals/5c/66/4d/5c664d8566c813b322ad4f185b1c9e0a.jpg",
//   //   "https://i.ytimg.com/vi/v0ZdU1nL0_I/maxresdefault.jpg",
//   //   "http://southindiatourplanners.com/wp-content/uploads/2013/02/image37.jpg"
//   // ]

//   // },
//   // {
//   //   placeName:"The Ghost Lights",
//   //   cityName:"West Bengal",
//   //   description:"The marshes of West Bengal can get spooky in the dark, but there is one phenomenon that really freaks out fishermen there.The Mystery: There have been many sightings of unnatural glowing lights of different colours hovering over the marshes in West Bengal. Referred to as ‘Aleya Lights’ for many years now, these lights are a nightmare for fishermen, as they usually end up confusing them and they would lose their way. In many cases reported till date, various fishermen have even lost their lives due to these strange lights. These marshes are some of the most mysterious places in India owing to this unexplained phenomenon.The Theory: Scientists suggest that these lights are essentially ionization of methane over the marshes that forms out of the organic matter present in abundance in these bogs.",
//   //   placeCategory:"Mysterious",
//   //   images:["https://www.thelivingmoon.com/49ufo_files/04images/Ghost_Lights/Bengal_Lights_001.jpg",
//   //           "http://3.bp.blogspot.com/-apZnz7OSrA0/VlbmvfI_qRI/AAAAAAAAA2k/9pqP_vYXE1Y/s1600/ghosts-in-my-attic.jpg",
//   //           "https://www.thelivingmoon.com/49ufo_files/04images/Ghost_Lights/Bengal_Lights_002.jpg"
//   // ]
//   // },

//   // {
//   //   placeName:"Chadar Trek,",
//   // cityName:"Ladakh",
//   // description:"The Chadar trek (also known as Zanskar Trek), is a most remarkable experience in the Himalayan ranges. This trek is over the frozen River Zanskar that becomes a thick sheet of ice during the winters. Make your way over this sheet of ice and maneuver narrow ridges.This region records the lowest temperatures, which makes it one of the most exciting high altitude treks in the world. The activity starts at Chilling and continues till Lingshed, from where you will have to walk on the frozen River Zanskar or Chadar. Another important attraction of the region is the Buddhist heritage and religious richness",
//   // placeCategory:"Trekking",
//   // images:["http://www.365hops.com/blog/wp-content/uploads/2015/07/frozen-river-chadar-trek-700x467.jpg",
//   // "https://i2.wp.com/yellowpeaks.com/wp-content/uploads/2016/02/Chadar-Trek-and-Ladakh-2016-34.jpg",
//   // "https://cdn.iamlivingit.com/wp-content/uploads/2017/04/frozen-river.jpg"
//   //        ]

//   // },

//   // {
//   //   placeName:"Goecha La Trek",
//   //   cityName:"Sikkim",
//   //   description:"The trekking experience in Sikkim is unlike any other part of the Indian Himalayas. The landscape, people and the surroundings are quite different from any part of the country, which makes the Goechala trek a unique experience. You will walk through rhododendron forests, beautiful meadows and will come across lovely streams of water during this trek. Trekking here is once in a lifetime experience to have in Sikkim.The journey begins at Yuksom, which is situated at an elevation of 5,600 feet and will take you through places such as Sachen, Tshoka, Dzongri and Thansing before reaching the icy trail of Goechala. The entire trip makes for a wonderful experience Best Season: September to November, March to April",

//   //   placeCategory:"Trekking",
//   //   images:["https://www.ashmitatrek.com/uploads/gallery/20160526_134937.jpg",
//   //   "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Kabru_Complex.jpg/1200px-Kabru_Complex.jpg",
//   //   "http://www.treknclimb.in/sites/default/files/IMG_3898.jpg"
//   // ]

//   // },
//   // {
//   //   placeName:"Valley of Flowers Trek",
//   //   cityName:"Uttarakhand",
//   //   description:"Known as the most beautiful trek in the world with the blue Primula, Valley of Flowers Uttarakhand is a must do trek for you. Tucked up at a high altitude this trek is renewed with the Mountaineers and adventure seekers.  Blessed with exotic flowers, faunas and magnificent views this trek will take you to the world of snow clad mountains and high cliffs. High in the grand Himalayas of the Garhwal district sprawls this captivating valley. The best time to do this trek is during the month of mid-July to mid-August",

//   //   placeCategory:"Trekking",
//   //   images:["https://www.adventurenation.com/blog/wp-content/uploads/2014/09/1-1024x530.jpg",
//   //   "https://www.hlimg.com/images/things2do/738X538/unnamed-3_1523102238t.jpg",
//   //   "http://bmcindia.org/events/valley-of-flowers-uttarakhand2.jpg"

//   // ]

//   // },
//   // {
//   //   placeName:"Valley of Flowers Trek",
//   //   cityName:"Uttarakhand",
//   //   description:"Known as the most beautiful trek in the world with the blue Primula, Valley of Flowers Uttarakhand is a must do trek for you. Tucked up at a high altitude this trek is renewed with the Mountaineers and adventure seekers.  Blessed with exotic flowers, faunas and magnificent views this trek will take you to the world of snow clad mountains and high cliffs. High in the grand Himalayas of the Garhwal district sprawls this captivating valley. The best time to do this trek is during the month of mid-July to mid-August",

//   //   placeCategory:"Trekking",
//   //   images:["https://www.adventurenation.com/blog/wp-content/uploads/2014/09/1-1024x530.jpg",
//   //   "https://www.hlimg.com/images/things2do/738X538/unnamed-3_1523102238t.jpg",
//   //   "http://bmcindia.org/events/valley-of-flowers-uttarakhand2.jpg"
//   // ]

//   // },

//   // {
//   //   placeName:"Great Lakes Trek ",
//   //   cityName:"Kashmir",
//   //   description:"The Great Lakes trek is a visual poetry that sprinkles your heart with colours of Kashmir. A grey is written all over the valleys, while some days the Sun smiles saffron through the pine trees. You tread barefoot on the soft green grass spread on the meadows, as the eyes get a kiss of white Himalayas. As the blue and purple Iris flowers greet, the brown Maple trees dance folk. You go fishing trout in one of the lakes, or pitch your tents near the shepherd huts. The twin lakes of Vishnusar-Kishansar gleam sensuously at night cuddled between the mountains. The hot Kadha in a dhaba about 1100 feet above sea level, tastes like nectar. The trek begins at Sonmarg, that can be easily reached from Srinaga",

//   //   placeCategory:"Trekking",
//   //   images:["https://kashmirtrekkingtour.com/data/uploads/treks/vishnu-sar-lake-trekking.jpg",
//   //   "https://indiahikes.com/wp-content/uploads/2015/11/Shyam-kumar-Chelathur-KGL.jpg?x23863",
//   //   "https://s3.ap-south-1.amazonaws.com/thegreatnext-images/images/trips/444/gallery/Gallery_1.jpg"
//   // ]

//   // },

//   //   {
//   //     placeName: "Hawa Mahal ",
//   //     cityName:"Jaipur,Rajasthan",
//   //     description:"The Hawa Mahal Jaipur is the beautiful many windowed extension of the City Palace that is said to resemble the honeycomb structure of a bee’s nest. Since the construction of the Hawa Mahal Jaipur in 1799 the building has become the iconic structure of the city and the pink sandstone palace is considered as the finest example of Rajput architecture.",
//   //    placeCategory:"Historical",
//   //     images:["https://www.tourmyindia.com/images/hawa-mahal-fort-jaipur3.jpg",
//   //             "http://www.petriepr.com/wp-content/uploads/2016/08/Sobha-Niwas.jpg",
//   //             "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jaipur_city_palace_interior.jpg/800px-Jaipur_city_palace_interior.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Taj Mahal",
//   //     cityName:"Agra, Uttar Pradesh",
//   //     description:"This epitome of Mughal architecture, built entirely with white marble is one of the most well-known identifiers of India. Its grandeur and beauty will have you spellbound.Shah Jahan built this paragon for his wife Mumtaz Mahal to enunciate his love for her. Situated in one of the “Golden Triangle” cities, you also get an opportunity to explore the streets of Agra.",
//   //    placeCategory:"Historical",
//   //     images:["https://www.askideas.com/media/36/Awesome-Taj-Mahal-HD-Wallpapewr.jpg",
//   //             "https://whc.unesco.org/uploads/thumbs/site_0252_0031-360-360-20131015115549.jpg",
//   //             "https://api.ning.com/files/sGeqV*sT8d0V4e*2ztJk-jKapZUQ8NN6swNHLQxFGbl-ZqX*S6Vpgv00OgY07PTxh*hvcrDmkG0QysDh6xq501N86vOi292x/AmazingTajmahalPictures2.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Gateway Of India",
//   //     cityName:" Mumbai, Maharashtra",
//   //     description:" One of India’s iconic landmarks, Gateway of India overlooking the Mumbai Harbour was built by the British in 1924. In the modern times, the Gateway is a favorite picnic spot for locals and tourists, alike.Dotted by dozens of street vendors serving lip-smacking local food along with balloon sellers, give this place a pleasingly happy vibe.",

//   //    placeCategory:"Historical",
//   //     images:["https://cdn1.goibibo.com/t_tg_fs/mumbai-gateway-of-india-150051333747-orijgp.jpg",
//   //             "https://upload.wikimedia.org/wikipedia/commons/1/18/Gateway_by_payas.jpg",
//   //             "http://inde.nouvini.com/wp-content/uploads/sites/5/2016/03/Inde-mumbai-bombay-gateway-india.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: " Mysore Palace",
//   //     cityName: "Mysore, Karnataka",
//   //     description:" Built by British architect Lord Henry Irwin in 1912, Mysore Palace is located in the heart of the city. An architectural wonder built in Indo Saracenic style, this palace features intricate interiors. Interestingly,  Golden palanquin was used by the Maharaja which was then carried by elephants during the annual Dasara festivities. Goddess Durga’s idol is now placed inside the palanquin.The months between October to March are the most pleasant and offer a comfortable stay here. Avoid summers as they are very sultry hot.",

//   //    placeCategory:"Historical",
//   //     images:["https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2016/06/Mysore-Palace-Best-Places-to-Visit-in-Mysore.jpg",
//   //             "https://www.nativeplanet.com/img/2016/06/illuminatedmysorepalace-24-1466764757.jpg",
//   //             "http://res.cloudinary.com/himanshujain/image/upload/w_640,h_480,fl_progressive,q_50/v1451838062/activity/Mysure_Palace_-_edited_cekgzm.jpg"

//   //      ]
//   //   },
//   //   {
//   //     placeName: "Golden Temple",
//   //     cityName: "Amritsar,Punjab",
//   //     description:"Tangibly the most spiritual place in India, Golden Temple, also known as Sri Harmindar Sahib, is the holiest shrine in Sikhism which is alive with religious fervour and sacredness. It is a place that can only be experienced and not described. Serving as a symbol of brotherhood and equality, Golden Temple is visited by people from all over the globe who come here to seek spiritual solace and religious fulfilment. Although the Golden Temple itself is of great historical and architectural interest, it is the view of the resplendent shrine, glistening in the centre of the tank, bringing an infinite calmness that is most memorable to a visitor.",

//   //    placeCategory:"Historical",
//   //     images:["https://imgak.mmtcdn.com/hp-images/new/cities/1350/Golden%20Temple_704x385.jpg",
//   //             "https://k6u8v6y8.stackpathcdn.com/blog/wp-content/uploads/2015/04/golden-temple.jpg",
//   //             "https://i.ytimg.com/vi/m701WKQMeYQ/maxresdefault.jpg"

//   //      ]
//   //   },
//   //   {
//   //     placeName: "Kumbhalgarh’s Wall",
//   //     cityName: "Kumbhalgarh,Rajasthan",
//   //     description:"It took over a century to construct the wall and it was later enlarged in the 19th century. The Kumbhalgarh Fort, protected by the massive wall, was built high on a hill so it could dominate and observe the landscape from a distance. Altogether the wall has seven gateways, and it is believed that during the reign of the Maharana, the wall held so many lamps that it enabled the local farmers to work both day and night.",

//   //    placeCategory:"Historical",
//   //     images:["http://www.haja.co/wp-content/uploads/2017/02/World%E2%80%99s-2nd-Largest-Wall-at-Kumbhalgarh-Fort-Rajasthan-4.jpg",
//   //             "http://www.ancientpages.com/wp-content/uploads/2015/08/greatwallkumbhalgarh5.jpg",
//   //             "https://www.india.com/travel/wp-content/uploads/2017/12/Kumbhalgarh-photo-6.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Charminhar",
//   //     cityName: "Hyderabad,Telangana",
//   //     description:"Charminar in Hyderabad was constructed by the eminent architect named Mohammed Quli Qutub Shah in the year of 1591. This magnificent edifice of granite, lime, mortar or pulverised marble was built as soon as he shifted his capital to this city. The monument oozes out sense of aesthetics of the architects of the time. It reflects the great architectural eminence of the time. You can site Charminar - Hyderabad at the heart of the city.",

//   //    placeCategory:"Historical",
//   //     images:["https://media-cdn.tripadvisor.com/media/photo-s/10/5e/1e/55/charminar-night-view.jpg",
//   //             "https://adventurousgopal.files.wordpress.com/2015/03/charminar.jpg",
//   //             "https://mailz4u.files.wordpress.com/2017/09/charminar.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Lake Palace",
//   //     cityName: "Udaipur, Rajasthan",
//   //     description:"Taj Lake Palace in Udaipur, is the most romantic hotel in the world.  It was built in 1746 as the pleasure palace of Maharana Jagat Singh II. Taj Lake Palace is one of the most recognisable residences in the world , since it has been featured in many films and TV serials, most notably, Octopussy and The Jewel in The Crown.",

//   //    placeCategory:"Historical",
//   //     images:["https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/01/shutterstock_536597029.jpg",
//   //             "https://image3.mouthshut.com/images/imagesp/925003730s.jpg",
//   //             "https://s-ec.bstatic.com/images/hotel/max1024x768/198/19855153.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Chittorgarh Fort",
//   //     cityName: "Chittorgarh,Rajasthan",
//   //     description:"Chittorgarh Fort is one of the largest forts in India which was the capital of Rajasthan. Structures like palaces, towers, gates, temples and others can still be found in the fort. The fort has been attacked by many kings of Delhi Sultanate, Gujarat Sultanate, and others.",

//   //    placeCategory:"Historical",
//   //     images:["https://www.heritagehotelsofindia.com/blog/wp-content/uploads/2016/11/chittorgarh-fort-chittorgarh.jpg",
//   //             "http://www.indiaraju.com/wp-content/uploads/2018/06/Chittorgarh-Fort-High-Quality-Wallpapers-min-1500x1108.jpg",
//   //             "http://allhdwallpapers.com/wp-content/uploads/2015/06/Chittorgarh-Fortindia-5-1024x640.jpg"

//   //      ]
//   //   },

//   //   {
//   //     placeName: "Bada Imambara",
//   //     cityName: "Lucknow, Uttar Pradesh",
//   //     description:"The Bara Imambara of Lucknow is one of the most famous monuments of the city. Also known as Asfi Imambara, after the name of the Nawab of Lucknow who got it constructed, it is an important place of worship for the Muslims who come here every year to celebrate the religious festival of Muharram. The Imambara is primarily known for its incredible maze, known as Bhul Bhulaiya locally, which is located on the upper floor of the monument.",

//   //    placeCategory:"Historical",
//   //     images:["https://ik.imagekit.io/rkw3fpbem/wp-content/uploads/2018/02/bara-imambara-complex-lucknow.jpg",
//   //             "https://upload.wikimedia.org/wikipedia/commons/a/ae/Bara_Imambara_At_Night_01.JPG",
//   //            "https://res.cloudinary.com/trell/f_auto,fl_progressive,t_medium/user-content/images/orig/ZYeJazurpmh2nQBQpHMs.jpg"

//   //      ]
//   //   },

//   {
//     placeName: "Shalimar Bagh",
//     cityName: "Shrinagar, Jammu and Kashmir",
//     description:"Covering 12.4 hectares of land, Shalimar Garden adds to the beauty of Srinagar. A chinar-lined canal passes through the middle of the well-organized garden offering an immaculate picture of Mughal creation. Divided into threemain terraces, Shalimar Bagh blends natural beauty with architectural genius and offers itself as a prime attraction in Jammu & Kashmir tourism. Each terrace has been designed carefully and displays a colorful picture; the first terrace comprises Diwan-e-Aam, whereas the second terrace shelters Diwan-e-Khas. Attracting people of all ages, this 400 years old garden is a wonderful tourist place to visit in Srinagar. Overcoming many tides of time, this exquisite Mughal marvel has been able to maintain its timeless beauty.",

//    placeCategory:"Historical",
//     images:["[http://www.thekashmirtravels.com/wp-content/uploads/2018/01/1389870295.jpg",
//             "https://www.tourmyindia.com/images/shalimar_bag.jpg",
//            "http://www.transindiatravels.com/wp-content/uploads/shalimar-bagh-jammu-and-kashmir.jpg"

//      ]
// },

// ];

const cultureData = [
  {
    festivalName: "Diwali",
    Mounth: "November",
    description:
      "Millions of Hindus around the world celebrate Diwali with gift exchanges, fireworks and festive meals. The Diwali celebration in India takes place when the monsoon season ends and the weather is mild and pleasant. People try to pay off their old debts, make or buy new clothes and thoroughly clean their houses as part of the festival preparations. House exteriors are whitewashed and sometimes decorated with designs drawn in white rice flour and filled in with color. Buildings are traditionally illuminated with oil-burning bowls called dipa lights, or more recently, with strings of artificial lights. People spend time with their friends and family.",
    category: "Culture",
    images: [
      "https://dama.bg/uploaded/posts/dbd914804353a3572c4c5a61dc655d65.jpg?v=1",
      "https://images.indianexpress.com/2017/06/29-vs-dipawali-celebration-759.jpg",
      "http://temesira.org/wp-content/uploads/2017/07/Happy-Diwali-2016.png"
    ]
  },

  {
    festivalName: "Holi",
    Mounth: "March",
    description:
      "Holi also celebrates the victory of good over evil, as well as the abundance of the spring harvest season. It's commonly referred to as the 'Festival of Colors'. People exuberantly throw colored powder and water all over each other, have parties, and dance under water sprinklers. Bhang (a paste made from cannabis plants) is also traditionally consumed during the celebrations. Holi is a very carefree festival that's great fun to participate in if you don’t mind getting wet and dirty.",
    category: "Culture",
    images: [
      "https://visittrivalley.com/wp-content/uploads/2018/03/iStock-471366604.jpg",
      "https://www.visitrenotahoe.com/wp-content/uploads/2017/07/HoliFestivalColor1.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Holi_shop.jpg/1200px-Holi_shop.jpg"
    ]
  },

  {
    festivalName: "Dussehra",
    Mounth: "September",
    description:
      "Dussehra, also referred to as Vijayadashami, is also among the most famous festivals of India. It is celebrated in different forms countrywide. Ramlila (enactment of scenes from Ramayana) is held everywhere for 10 days. It’s culminated with “Ravan Dahan” – the burning of huge effigies of Ravana, Meghnath, and Kumbhkaran which is a real spectacle to see.",
    category: "Culture",
    images: [
      "https://d19gb5k9ejx8w0.cloudfront.net/uploads/2014/10/CoverPage-Dussehra-Ramlila.jpg",
      "http://images.patrika.com/mediafiles/2016/09/12/l_mela-1473655295.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSj6qve2pQUoyjAtqTbQcfal0CI1NB8VHOe2W3xNs04JEFr5yaXghttp://blog.railyatri.in/wp-content/uploads/2015/10/blog_Mysore-dasara.png"
    ]
  },

  {
    festivalName: "Vaisakhi",
    Mounth: "April",
    description:
      "Baisakhi is primarily a festival celebrated by the Sikh community of Punjab and those around the world. It celebrates the welcoming of the harvest season for the rabi crops. The Sikhs celebrate this festival with a lot of excitement and enthusiasm by performing local folk dances such as Giddha and Bhangra. The festival is of great religious significance in India as it marks the day when the tenth Guru of Sikhs, Guru Gobind Singh, laid out the foundation stone for the Panth Khalsa-the Order back in 1699.",
    category: "Culture",
    images: [
      "https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/12/cover2.jpg",
      "http://www.thetravelboss.com//userfiles/image/images/festivities/Baisakhi-Festival-3.jpg",
      "http://www.4to40.com/wp-content/uploads/2016/01/Young-girls-wear-traditional-Punjabi-dress-as-they-perform-the-giddha-during-celebrations-on-the-eve-of-the-Lohri-festival-in-Amritsar.jpg"
    ]
  },

  {
    festivalName: "Ganesh Chaturthi",
    Mounth: "September",
    description:
      "The spectacular Ganesh Chaturthi festival honors the birth of the beloved Hindu elephant-headed god, Lord Ganesha. The start of the festival sees huge, elaborately crafted statutes of Ganesha installed in homes and public podiums, which have been especially constructed and beautifully decorated. At the end of the festival, the statutes are paraded through the streets, accompanied by much singing and dancing, and then submerged in the ocean. The best place to experience it is in Mumbai.",
    category: "Culture",
    images: [
      "https://i.dailymail.co.uk/i/pix/2010/09/22/article-1314347-0B4E98AA000005DC-515_972x488.jpg",
      "http://www.blogiism.com/wp-content/uploads/2017/08/ganesh-Chaturthi-gujarat.jpg",
      "https://s3.amazonaws.com/medias.photodeck.com/493e5156-f46b-43fc-a993-1f90b7772817/Brett-Cole-India-02391_medium.jpg"
    ]
  }
];

// const foodData = [
//   {
//     foodName: "Paneer Tikka Masala",

//     type: "North Indian",

//     description:
//       "Chunks of marinated grilled paneer and capsicum in a creamy onion tomato masala a paneer tikka masala is one of the vegetarian Indian recipes that have found favour abroad. Soft grilled paneer and the flavours of the masala, blend together beautifully to give you a final dish which is a treat to all your senses. The process of making it from scratch can be lengthy but worth the effort.",

//     category: "Food",

//     images: [
//       "http://www.cooktube.in/wp-content/uploads/2016/10/paneer-tikka-masala.jpg",
//       "http://www.ektaindianrestaurant.com/fishtown/br/wp-content/uploads/sites/5/2017/02/paneer-tikka-masala-recipe-2.jpg",
//       "https://www.cookwithkushi.com/wp-content/uploads/2016/02/IMG_8317_-1.jpg"
//     ]
//   },
//   {
//     foodName: "Butter Naan",

//     type: "North Indian",

//     description:
//       "Naan is a leavened, oven-baked flatbread that’s normally served with all meals. Typically, it will be served hot and brushed with ghee or butter. In non-traditional circles, different varieties of naan are available, like garlic naan or cheese naan. However you eat it, naan acts as almost a spoon to soup up sauce or dipped into chutneys. An Indian meal isn’t complete without naan at its side.",

//     category: "Food",

//     images: [
//       "http://grabbite.com/wp-content/uploads/2014/03/naan2.jpg",
//       "http://www.2spiceguru.com.au/wp-content/uploads/2015/04/butter-naan.jpg",
//       "http://i.imgur.com/32qBM3D.jpg"
//     ]
//   },
//   {
//     foodName: "Samosas",

//     type: "North Indian",

//     description:
//       "Samosas are a fried or baked pastry with savoury filling, such as spiced potatoes, onions, peas, lentils and sometimes ground lamb, ground beef or ground chicken. They were introduced to India during the Muslim Delhi Sultanate when cooks from the Middle East and Central Asia migrated to work in the kitchens of the Sultan and the nobility. Indian samosas are usually vegetarian, and often accompanied by a mint sauce or chutney. Samosas are a common street food and many tourists or Indians eat them as a midday snack.",

//     category: "Food",

//     images: [
//       "http://www.udipi-restaurant.com/wp-content/uploads/2014/05/samosa-900x600.jpg",
//       "https://us.123rf.com/450wm/mnsanthoshkumar/mnsanthoshkumar1203/mnsanthoshkumar120300071/12922427-popular-indian-asian-and-african-deep-fried-snack-called-samosa-with-spicy-chutney-and-mint.jpg?ver=6",
//       "http://cdn.recipes100.com/v/5f2a49e9adeb977a79ec1f88a8470cef.jpg"
//     ]
//   },
//   {
//     foodName: "Masala Dosa",

//     type: "South Indian",

//     description:
//       "A popular South Indian dish, dosa is a delicious comfort food that you can eat in any given course of food. It is light on the stomach, easy and quick to cook. Though its origin lies in Udupi, Karnataka, it is loved and savored all over the country and across the world as well. Dosa has had many variations over time but the most popular remains the plain dosa and masala dosa. You can have dosa for breakfast, brunch, lunch or even dinner since it is easily digestible, low on calories and extremely appetizing!",

//     category: "Food",

//     images: [
//       "https://www.mozismenu.com/wp-content/uploads/2017/06/Chicken-Masala-Dosa-Chicken-Masala-Pancake-0.jpg",
//       "https://www.currylounge.com.hk/wp-content/uploads/2017/03/paper-masala-dosa.jpg",
//       "http://www.therustyrudder.net/wp-content/uploads/2017/07/new-york-street-food-indian-masa.jpg"
//     ]
//   },
//   {
//     foodName: "Uttapam",

//     type: "South Indian",

//     description:
//       "A traditional delicacy from down South which literally means 'poured appam' in Tamil. Uttapam is a dosa-like preparation, that is light and easy on the stomach and can be served for breakfast, brunch or evening snacks. You can call it a soft, savoury pancake that is delicious, healthy and filling.",

//     category: "Food",

//     images: [
//       "http://www.cooktube.in/wp-content/uploads/2018/08/onion-tomato-uttapam.jpg",
//       "https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2016/11/30111121/oats-uthappam-recipe.jpeg?ssl=1?w=356&strip=all&quality=80",
//       "http://spicyworld.in/recipeimages/bread-uttapam-b382d7f6-2228-41ca-9b24-c22ad5815a9d.jpg"
//     ]
//   }
// ];

Culture.create(cultureData)
  .then(cultureResults => {
    console.log(`Inserted ${cultureResults.length} Culture`);
  })
  .catch(err => {
    console.log("inserted failure", err);
  });
