var srcnaem = ["chrismas/Christmas1/Event23-Christina-lv1_touch.webm", "chrismas/Christmas1/Event23-Christina-lv1_finish.webm",
    "chrismas/Christmas1/Event23-Christina-lv2_idle.webm", "chrismas/Christmas1/Event23-Christina-lv2_touch.webm", "chrismas/Christmas1/Event23-Christina-lv2_finish.webm",
    "chrismas/Christmas1/Event23-Christina-lv3_idle.webm", "chrismas/Christmas1/Event23-Christina-lv3_touch.webm", "chrismas/Christmas1/Event23-Christina-lv3_finish.webm",
    "chrismas/Christmas1/Event23-Christina-lv4_idle.webm", "chrismas/Christmas1/Event23-Christina-lv4_touch.webm", "chrismas/Christmas1/Event23-Christina-lv4_finish.webm",
    "chrismas/Christmas1/Event23-Christina-lv5_idle.webm", "chrismas/Christmas1/Event23-Christina-lv5_touch.webm", "chrismas/Christmas1/Event23-Christina-end.webm"]
var index = 0;
function next() {
    if (index <= srcnaem.length - 1) {
        document.getElementById("christmas").src = srcnaem[index];
        index++;
    }
}

