import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="flex flex-col mb-4 rounded-lg p-5 bg-white">
      <div >
        <h1 className="text-[#111111] text-lg font-semibold">{title}</h1>
      </div>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
