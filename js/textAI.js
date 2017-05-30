/**
 * Created by MSI on 2017/5/6.
 */
var taskAI = document.getElementsByClassName("taskAI")[0];
var AIcurTime = new Date();
var AIcurHour = AIcurTime.getHours();
var AIcurMinutes = AIcurTime.getMinutes();
window.onload=function () {
    setInterval(function () {
        updatetaskAI();
    },1000);
};
function updatetaskAI() {
    //5:30~6:00
    if (AIcurHour == 5 && AIcurMinutes >= 30) {
        taskAI.innerHTML = "请指定好今天的计划"
    }
    //6:00~6:30
    if (AIcurHour >= 6 && AIcurMinutes <= 30 && AIcurHour < 7) {
        taskAI.innerHTML = "我在外面晨读"
    }
    //6:30~7:00
    if (AIcurHour >= 6 && AIcurMinutes >= 30 && AIcurHour < 7) {
        taskAI.innerHTML = "我在早上锻炼"
    }
    //7:00~7:30
    if (AIcurHour >= 7 && AIcurMinutes <= 30 && AIcurHour < 8) {
        taskAI.innerHTML = "早餐及餐后休息"
    }
    //7:30~8:15
    if ((AIcurHour == 7 && AIcurMinutes >= 30) || (AIcurHour == 8 && AIcurMinutes <= 15)) {
        taskAI.innerHTML = "碎片时间1 "
    }
    //8:35~9:30
    if ((AIcurHour == 8 && AIcurMinutes >= 35) || (AIcurHour == 9 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "碎片时间2"
    }
    //9:30~12:00
    if ((AIcurHour == 9 && AIcurMinutes >= 35) || (AIcurHour > 9 && AIcurHour < 12)) {
        taskAI.innerHTML = "前端学习与实践"
    }
    //12:00~13:30
    if (AIcurHour ==12|| ( AIcurMinutes <= 30 && AIcurHour == 13)) {
        taskAI.innerHTML = "午餐及午休"
    }
    //13:30~17：30
    if ((AIcurHour >13&& AIcurHour <17) || (AIcurHour == 13 && AIcurMinutes >= 30) || (AIcurHour == 17 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "前端学习与实践"
    }
    //17:30~18:30
    if ((AIcurHour == 17 && AIcurMinutes >= 30) || (AIcurHour == 18 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "晚餐及餐后放空大脑"
    }
    //18：30~20:30
    if ((AIcurHour ==19 ) || (AIcurHour == 18 && AIcurMinutes >= 30) || (AIcurHour == 20 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "擦屁股时间"
    }
    //20:30~22:30
    if ((AIcurHour ==21 ) || (AIcurHour == 20 && AIcurMinutes >= 30) || (AIcurHour == 22 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "自由自在的时间"
    }
    //22:30~23:30
    if ((AIcurHour == 22 && AIcurMinutes >= 30) || (AIcurHour == 23 && AIcurMinutes <= 30)) {
        taskAI.innerHTML = "在床上了"
    }
    //23:30~5:30
    if ((AIcurHour < 5 || AIcurHour > 23) || (AIcurHour == 5 && AIcurMinutes <= 30) || (AIcurHour == 23 && AIcurMinutes >= 30)) {
        taskAI.innerHTML = "你已经睡着了，你现在在做梦而已"

    }
    console.log(AIcurHour);
}
