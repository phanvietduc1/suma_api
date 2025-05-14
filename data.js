const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: "password123",
    sex: 1,
    countryCode: 84,
    phone: 123456789,
    playlist: [1, 2, 3]
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: "securepass",
    sex: 0,
    countryCode: 1,
    phone: 987654321,
    playlist: [2, 4]
  },
  {
    id: 3,
    name: "Alex Johnson",
    email: "alex@example.com",
    password: "alex2023",
    sex: 1,
    countryCode: 44,
    phone: 555123456,
    playlist: [1, 3, 5]
  }
];

const items = [
  {
    id: 1,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 156,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "This is the first item description",
    categoryId: 1
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 89,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "This is the second item description",
    categoryId: 2
  },
  {
    id: 3,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 243,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "This is the third item description",
    categoryId: 3
  },
  {
    id: 4,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 72,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "This is the fourth item description",
    categoryId: 4
  },
  {
    id: 5,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 120,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "This is a repeated thumbnail and link item",
    categoryId: 5
  },
  {
    id: 6,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 178,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Another sports video with repeated content",
    categoryId: 2
  },
  {
    id: 7,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 95,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "More tech content with same resources",
    categoryId: 3
  },
  {
    id: 8,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 210,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Additional food content with same media",
    categoryId: 4
  },
  {
    id: 9,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 65,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "More music with repeated resources",
    categoryId: 1
  },
  {
    id: 10,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 132,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Travel video using existing resources",
    categoryId: 5
  },
  {
    id: 11,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 187,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Music video with tech thumbnail",
    categoryId: 1
  },
  {
    id: 12,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 93,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Sports content with food thumbnail",
    categoryId: 2
  },
  {
    id: 13,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 142,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Popular music video trending now",
    categoryId: 1
  },
  {
    id: 14,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 211,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Latest sports highlights from yesterday",
    categoryId: 2
  },
  {
    id: 15,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 176,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Tech review of new gadgets",
    categoryId: 3
  },
  {
    id: 16,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 88,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Cooking tutorial for beginners",
    categoryId: 4
  },
  {
    id: 17,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 154,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Travel guide to exotic locations",
    categoryId: 5
  },
  {
    id: 18,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 201,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Classical music compilation",
    categoryId: 1
  },
  {
    id: 19,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 167,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Extreme sports championship highlights",
    categoryId: 2
  },
  {
    id: 20,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 123,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "AI and machine learning tutorial",
    categoryId: 3
  },
  {
    id: 21,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 98,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Gourmet dessert recipes",
    categoryId: 4
  },
  {
    id: 22,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 189,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Hidden gems in Southeast Asia",
    categoryId: 5
  },
  {
    id: 23,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 221,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Jazz and blues collection",
    categoryId: 1
  },
  {
    id: 24,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 145,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Olympic games highlights",
    categoryId: 2
  },
  {
    id: 25,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 178,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Smartphone comparison review",
    categoryId: 3
  },
  {
    id: 26,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 87,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Street food around the world",
    categoryId: 4
  },
  {
    id: 27,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 192,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Best beaches in the world",
    categoryId: 5
  },
  {
    id: 28,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 134,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Rock concert highlights",
    categoryId: 1
  },
  {
    id: 29,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 211,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Football match highlights",
    categoryId: 2
  },
  {
    id: 30,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 156,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Latest software development trends",
    categoryId: 3
  },
  {
    id: 31,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 78,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Healthy meal prep ideas",
    categoryId: 4
  },
  {
    id: 32,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 198,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "European city tour guide",
    categoryId: 5
  },
  {
    id: 33,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 167,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Top 10 songs of the month",
    categoryId: 1
  },
  {
    id: 34,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 231,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Basketball tournament finals",
    categoryId: 2
  },
  {
    id: 35,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 112,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Coding challenge solutions",
    categoryId: 3
  },
  {
    id: 36,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 89,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Quick and easy dinner recipes",
    categoryId: 4
  },
  {
    id: 37,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 176,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Adventure travel destinations",
    categoryId: 5
  },
  {
    id: 38,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 201,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Piano tutorial for beginners",
    categoryId: 1
  },
  {
    id: 39,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 145,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Tennis championship highlights",
    categoryId: 2
  },
  {
    id: 40,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 132,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Web development tutorial series",
    categoryId: 3
  },
  {
    id: 41,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 76,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Vegetarian recipe collection",
    categoryId: 4
  },
  {
    id: 42,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 189,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Backpacking across Asia guide",
    categoryId: 5
  },
  {
    id: 43,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 234,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Electronic music mix",
    categoryId: 1
  },
  {
    id: 44,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 166,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Martial arts tournament",
    categoryId: 2
  },
  {
    id: 45,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 143,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Data science crash course",
    categoryId: 3
  },
  {
    id: 46,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 92,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Baking championship highlights",
    categoryId: 4
  },
  {
    id: 47,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 178,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Winter vacation destinations",
    categoryId: 5
  },
  {
    id: 48,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 211,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Guitar lessons for beginners",
    categoryId: 1
  },
  {
    id: 49,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 157,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Cricket match highlights",
    categoryId: 2
  },
  {
    id: 50,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 134,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Mobile app development tutorial",
    categoryId: 3
  },
  {
    id: 51,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 86,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "International cuisine showcase",
    categoryId: 4
  },
  {
    id: 52,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 198,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Hidden gems in South America",
    categoryId: 5
  },
  {
    id: 53,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 223,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Hip hop dance tutorial",
    categoryId: 1
  },
  {
    id: 54,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 176,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Swimming competition finals",
    categoryId: 2
  },
  {
    id: 55,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 145,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Blockchain technology explained",
    categoryId: 3
  },
  {
    id: 56,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 103,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Breakfast recipes from around the world",
    categoryId: 4
  },
  {
    id: 57,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 187,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Budget travel tips and tricks",
    categoryId: 5
  },
  {
    id: 58,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 209,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Vocal training exercises",
    categoryId: 1
  },
  {
    id: 59,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 167,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Golf tournament highlights",
    categoryId: 2
  },
  {
    id: 60,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 128,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Cybersecurity basics explained",
    categoryId: 3
  },
  {
    id: 61,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 94,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Gourmet coffee brewing techniques",
    categoryId: 4
  },
  {
    id: 62,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 176,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "African safari adventure guide",
    categoryId: 5
  },
  {
    id: 63,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 245,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "DJ mix - summer hits collection",
    categoryId: 1
  },
  {
    id: 64,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 187,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Volleyball championship highlights",
    categoryId: 2
  },
  {
    id: 65,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 132,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Python programming for beginners",
    categoryId: 3
  },
  {
    id: 66,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 79,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Sushi making masterclass",
    categoryId: 4
  },
  {
    id: 67,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 165,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Island hopping in the Caribbean",
    categoryId: 5
  },
  {
    id: 68,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 198,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Opera classics collection",
    categoryId: 1
  },
  {
    id: 69,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 143,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Rugby tournament finals",
    categoryId: 2
  },
  {
    id: 70,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 121,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Game development with Unity",
    categoryId: 3
  },
  {
    id: 71,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 84,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "BBQ grilling techniques",
    categoryId: 4
  },
  {
    id: 72,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 176,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Mountain climbing adventures",
    categoryId: 5
  },
  {
    id: 73,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 231,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Violin concerto performance",
    categoryId: 1
  },
  {
    id: 74,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 167,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Formula 1 race highlights",
    categoryId: 2
  },
  {
    id: 75,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 119,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Cloud computing fundamentals",
    categoryId: 3
  },
  {
    id: 76,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 92,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Cocktail mixing masterclass",
    categoryId: 4
  },
  {
    id: 77,
    thumbnail: "https://suram.com.co/wp-content/uploads/2020/02/paute.jpg",
    numbOfLike: 178,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    info: "Historical landmarks tour",
    categoryId: 5
  },
  {
    id: 78,
    thumbnail: "https://i.ytimg.com/vi/g6r4xBx15u0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBgC3CdxurzBL0FOr9huIly8TQj6Q",
    numbOfLike: 214,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    info: "Acoustic guitar session",
    categoryId: 1
  },
  {
    id: 79,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYW6yyWV2Z6GCX2CIhiYkJPvu1Ywz2jk9EQA&s",
    numbOfLike: 156,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    info: "Boxing match highlights",
    categoryId: 2
  },
  {
    id: 80,
    thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Fg9jITbDtFtKbYaTVFuCOnWYJOp-gWa1mQ&s",
    numbOfLike: 137,
    shareLink: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    info: "Artificial intelligence explained",
    categoryId: 3
  }
];

const liveItems = [
  {
    id: 1,
    shareLink: "https://us.streaminghd.cl/suramtv/tracks-v1a1/mono.m3u8"
  }
];

const categories = [
  {
    id: 1,
    name: "Music"
  },
  {
    id: 2,
    name: "Sports"
  },
  {
    id: 3,
    name: "Technology"
  },
  {
    id: 4,
    name: "Food"
  },
  {
    id: 5,
    name: "Travel"
  }
];

// Export the data
module.exports = {
  users,
  items,
  liveItems,
  categories
}; 