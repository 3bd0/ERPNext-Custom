frappe.ui.form.on('Purchase Order',{
    setup: function(frm) {
        frm.set_query("supplier_co", function() {
            return{
                filters: {
                    "supplier_type": [ "in", "Company"]
                }
            }
        });
    }
});