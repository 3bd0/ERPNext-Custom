frappe.ui.form.on('Sales Invoice',{
    customer: function(frm){
        if(frm.doc.customer){
            frappe.call({
                method:"erpnext_customize.erpnext_customize.doc_event.sales_invoice_event.check_customer_discount_jsx",
                args:{
                    customer: frm.doc.customer
                },
                callback: function(r){
                    if (r.message == 0){
                        frm.doc.additional_discount_percentage = 0;
                        frm.doc.discount_amount = 0;
                        frm.set_df_property('additional_discount_percentage', 'read_only', 1);
                        frm.set_df_property('discount_amount', 'read_only', 1);
                        }
                    else {
                        frm.set_df_property("additional_discount_percentage", "read_only", 0);
                        frm.set_df_property("discount_amount", "read_only", 0);
                    }
                }
            })
        }
    }
});
