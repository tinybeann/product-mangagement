module.exports = async (limitItems, query, count) => {
    const objectPagination = {
        currentPage: 1,
        limitItems: 4
    } 
    if(query.page) {
        objectPagination.currentPage = parseInt(query.page);
    }
    
    objectPagination.skip = (objectPagination.currentPage - 1) * objectPagination.limitItems;

    objectPagination.totalPage = Math.ceil(count/objectPagination.limitItems);

    return objectPagination;
}