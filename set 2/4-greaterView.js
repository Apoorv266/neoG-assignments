
const blog1 = {title: 'How to Learn JavaScript', author: 'John Doe', views: 1430};
const blog2 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 500};
const blog4 = {title: '10 Reasons to Start a Blog', author: 'Jane Smith', views: 900};

const getViews = ({views}) => views > 1000
console.log(getViews(blog1)); // true
console.log(getViews(blog2)); // false
console.log(getViews(blog4)); // false