import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 p-8 bg-[#1111110D] rounded-lg mt-8">
      <div className="bg-[#cac1fd] border-[#6047EC] border-2 rounded-xl mb-5">
        <h2 className="text-[#6047EC] text-xl font-semibold p-5 " >Spent time on read : {readingTime} min</h2>
      </div>
      <h1 className="text-[#111111] text-2xl font-bold mb-4">
        Bookmarked Blogs: {bookmarks.length}
      </h1>

      <div className=" ">
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number 
};

export default Bookmarks;
