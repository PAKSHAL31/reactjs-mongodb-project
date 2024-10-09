const Event = require("../../models/Event");

const getFilteredEvents = async (req, res) => {
  try {
    const events = await Event.find({})
    res.status(200).json({
      success: true,
      data: events,
    });
  } catch (e) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Some error occured",
    });
  }
};


module.exports = {getFilteredEvents} 
