export class Sorter{
    public sortByKey(array, key, asc) {
        return array.sort((a, b) => {
            const x = a[key];
            const y = b[key];
            if(asc){
                return ((x < y) ? 1 : ((x > y) ? -1 : 0));
            }
            else {
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            }
        });
    }
}