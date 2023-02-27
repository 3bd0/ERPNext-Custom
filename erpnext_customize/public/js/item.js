frappe.ui.form.on("Item", {
    refresh: function(frm) {
        if (frm.doc.is_stock_item) {
            frm.add_custom_button(__("All Work Order"), function() {
                frappe.route_options = {
                    "item_code": frm.doc.name
                }
                frappe.set_route("list", "Stock Entry");
            });
        }
    }
})