

// const Hero_img = () => {
//     return [
//         { image: require("./pexels-rdne-8385033.jpg") },
//         { image: require("./pexels-teddy-2263436.jpg") },
//         {
//             vedio:require(".3792293-hd_1920_1080_24fps.mp4")
//         }
       
//     ];
// };

// export default Hero_img;
const Hero_img = () => {
    return [
        { type: "video", source: require("./AdobeStock_1063511909_Video_HD_Preview.mp4") },
        { type: "image", source: require("./pexels-teddy-2263436.jpg") },
        { type: "image", source: require("./Untitled design.png") },
        { type: "video", source: require("./3792293-hd_1920_1080_24fps.mp4") },
    ];
};

export default Hero_img;
