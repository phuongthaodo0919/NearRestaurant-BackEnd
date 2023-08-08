import mongoose from "mongoose";
import Dishes from "./dish.js";

const Restaurants = mongoose.Schema ({
    id: mongoose.Types.ObjectId,
    name: String,
    address: String,
    services: [String],
    dishes: [Dishes],
    rate: Number,
    distance: Number,
    longDescription: String,
    shortDescription: String,
    timeOpen: String,
    dayOfWeek: String,
    image: String,
    isTrending: Boolean,
    isFavourite: Boolean,
}, {
    timestamps: true
})
export default Restaurants