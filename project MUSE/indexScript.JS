function Change() {
    const Mpl = document.getElementById("mpl");
    switch (Mpl.textContent){
        case (Mpl.textContent == "⏵ Play"):
            Mpl.textContent = "⏸ Stop"
            break;
        case (Mpl.textContent == "⏸ Stop"):
            Mpl.textContent = "⏵ Play"
            break;
    }
}