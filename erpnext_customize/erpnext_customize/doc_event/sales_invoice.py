import frappe

@frappe.whitelist()

def add_item_note(doc, method):
    doc.remarks = doc.note

def check_payment_pos(doc, method):
    if doc.is_pos == 1:
        if doc.paid_amount == 0:
            frappe.throw("Paid Amount Can Not Be 0")
