frappe.ui.form.on('Attendance',{
    check_in: function(frm){
        if(frm.doc.check_in && frm.doc.check_out){
            frappe.call({
                method:"erpnext_customize.erpnext_customize.doc_event.attendance_event.calculate_hours",
                args:{
                    check_in: frm.doc.check_in,
                    check_out: frm.doc.check_out
            },
            callback: function(r){
                frm.set_value("status", "Present");
                frm.set_value("hours", r.message);
            }
            })
        } else {
            frm.set_value("status", "Absent");
        }
    },
    check_out: function(frm){
        frm.trigger("check_in");
    }
})