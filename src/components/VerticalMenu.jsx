function VerticalMenu({menu, otro}) {
    console.log(menu);
    return (
        <div className="p-4">
            <h4 className="fst-italic">{menu.titulo}</h4>
            <ol className="list-unstyled">
                {menu.items.map((item)=>{
                    return <li key={item.id}><a href={item.link}>{item.text}</a></li>;
                })}
            </ol>
        </div>
    );
}

export default VerticalMenu;