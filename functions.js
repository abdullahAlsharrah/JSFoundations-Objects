/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

/**************************************************************
 * getChannelName(channel)
 * - recieves a channel object
 * - returns the name of the channel
 ****************************************************************/
function getChannelName(channel) {
  // Your code here
  return channel.name;
}

/**************************************************************
 * numberOfVideos(channel)
 * - recieves a channel object
 * - returns the number of videos that channel has
 ****************************************************************/
function numberOfVideos(channel) {
  // Your code here
  return channel.videos.length
}

/**************************************************************
 * channelHasVideo(videoTitle, channel):
 * - receives a video title (string)
 * - recieves a channel object
 * - returns true if the channel object has a video that matches the given video title
 * - returns false otherwise
 *
 * BONUS: use iteration method `.some()`
 ****************************************************************/
function channelHasVideo(videoTitle, channel) {
  // Your code here
  return channel.videos.some(element => element.title === videoTitle);
}

/**************************************************************
 * getChannelByName(channelName, channels):
 * - receives a channel name (string)
 * - recieves an array of channel objects
 * - returns the channel object with the same name as the channelName provided
 *
 * BONUS: use iteration method `.find()`
 ****************************************************************/
function getChannelByName(channelName, channels) {
  // Your code here
  return channels.find(channel => channel.name === channelName);
}

/**************************************************************
 * getChannelByVideoTitle(videoTitle, channels):
 * - receives a video title (string)
 * - recieves an array of channel objects
 * - returns the channel object that contains a video with the video title provided
 *
 * BONUS: use iteration methods `.find()` and `.some()`
 ****************************************************************/
function getChannelByVideoTitle(videoTitle, channels) {
  // Your code here
  return channels.find(channel => channel.videos.some(video => video.title === videoTitle))
}

console.log(getChannelByVideoTitle("The Universal S", [
  {
    name: "PowerfulJRE",
    description: "The Joe Rogan Experience podcast",
    videos: [
      {
        title: "Joe Rogan Experience #1480 - Kevin Hart",
        duration: 121
      },

      {
        title: "Joe Rogan Experience #1470 - Elon Musk",
        duration: 120
      },
      {
        title: "Joe Rogan Experience #1477 - Tony Hawk",
        duration: 102
      },
      {
        title: "Joe Rogan Experience #1413 - Bill Maher",
        duration: 118
      },
      {
        title: "Joe Rogan Experience #1208 - Jordan Peterson",
        duration: 175
      }
    ]
  },
  {
    name: "LEMMiNO",
    description: "Documentaries and list videos narrated by a 20-something Swedish guy.",
    videos: [
      {
        title: "The Universal S",
        duration: 19
      },

      {
        title: "Cicada 3301: An Internet Mystery",
        duration: 18
      },
      {
        title: "The Search For D.B. Cooper",
        duration: 29
      },
      {
        title: "The Mandela Effect: A Critical Analysis",
        duration: 16
      }
    ]
  },
  {
    name: "CGP Grey",
    description: "What ever I finds interesting.",
    videos: [
      {
        title: "The Trouble With Tumbleweed",
        duration: 7
      },

      {
        title: "Lockdown Productivity: Spaceship You",
        duration: 11
      },
      {
        title: "The Fable of the Dragon-Tyrant",
        duration: 13
      },
      {
        title: "The Rules for Rulers",
        duration: 18
      },
      {
        title: "The Simple Solution to Traffic",
        duration: 4
      },
      {
        title: "You Are Two",
        duration: 5
      }
    ]
  },
]
));
/**************************************************************
 * searchChannels(query, channels):
 * - receives a query (string)
 * - recieves an array of channel objects
 * - returns an array of the channel objects that contain the query in their name/description.
 *
 * Hint: use string method `.includes()` and iteration method `.filter()`
 ****************************************************************/
function searchChannels(query, channels) {
  // Your code here

  const h = channels.filter(channel => channel.name.includes(query) || channel.description.includes(query))
  return h
}

module.exports = {
  getChannelName,
  numberOfVideos,
  channelHasVideo,
  getChannelByName,
  getChannelByVideoTitle,
  searchChannels,
};
