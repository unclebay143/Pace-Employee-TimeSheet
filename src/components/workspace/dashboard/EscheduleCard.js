const EscheduleCard = (props) => {
    const { scheduleTitle, scheduleTime } = this.props
    return(
        <>
            <div class="flex-grow-1 d-flex align-items-center">
                <div class={`dot mr-3 ${bg-green}`}></div>
                <div class="text">
                    <h6 class="mb-0">{scheduleTitle}</h6><span class="text-gray">{scheduleTime}</span>
                </div>
            </div>

        </>
    )
}


export default EscheduleCard;