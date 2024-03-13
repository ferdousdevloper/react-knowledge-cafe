import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const { title, cover, author_img, author, posted_date,reading_time,hashtags } = blog;
  return (
    <div className=" mb-10 pb-10 border-b mt-8">
      <img className="rounded-lg" src={cover} alt="" />
      <div>
        <div className="flex justify-between mt-8">
          <div className="flex items-center gap-3">
            <img
              className="w-[60px] h-[60px] border rounded-[60px]"
              src={author_img}
              alt=""
            />
            <div>
              <h3 className="text-[#111] text-2xl font-bold">{author}</h3>
              <p className="text-[#0B0B0B99] font-semibold">{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-[#0B0B0B99] font-semibold">
            <p>{reading_time} <span>min read</span></p>           
            <button onClick={()=>handleAddToBookmark(blog)} className="text-2xl"><CiBookmark></CiBookmark></button>
          </div>
        </div>
      </div>
      <h2 className="text-[#111] text-4xl font-bold mt-5 mb-5">{title}</h2>
      <p className="text-[#0B0B0B99] text-xl font-semibold">
        {
          hashtags.map((hash, idx) => <span key={idx}> <a href="">#{hash}</a></span> )
        }
      </p>
      <button onClick={()=>handleMarkAsRead(reading_time)} className="text-[#6047EC] text-xl font-semibold underline mt-6">Mark as read</button>
      
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
  
  
};

export default Blog;
