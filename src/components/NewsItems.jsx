export default function NewsItems({item}){
    return(
        <>
       <div className="news-item">
          <h3>{item.title}</h3>
          <div>{item.feed}</div>
        </div>
        </>
    );
}