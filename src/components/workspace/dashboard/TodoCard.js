const TodoCard = (props) => {
    const { title, dueDate, cardColor } = this.props
    return(
        <>
            <div class="flex-grow-1 d-flex align-items-center">
                <div class={`dot mr-3 ${cardColor}`}></div>
                <div class="text">
                    <h6 class="mb-0">{title}</h6><span class="text-gray">{dueDate}</span>
                </div>
            </div>

        </>
    )
}


export default TodoCard;