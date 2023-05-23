export function filterRestaurant(searchText,restaurants){
    return restaurants.filter((rest) =>{
        return rest?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase());
    });
}