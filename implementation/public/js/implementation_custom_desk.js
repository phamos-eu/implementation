frappe.provide('frappe.ui');

frappe.ui.changeBackgound = function(){
    frappe.db.get_doc("Implementation Settings").then((r) => {
        if (r.enable_color){
            $("body").get(0).style.setProperty("--navbar-bg", r.navbar_color_picker);
            $("body").get(0).style.setProperty("--bg-color", r.background_color_picker);
        }else{
            //TODO: what to do with Dark theme?
            $("body").get(0).style.setProperty("--navbar-bg", "#FFF");
            $("body").get(0).style.setProperty("--bg-color", "var(--gray-50)");
        }
    })
}

frappe.ui.changeBackgound()