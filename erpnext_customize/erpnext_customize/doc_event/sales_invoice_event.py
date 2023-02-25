import frappe


@frappe.whitelist()
def add_item_note(doc, method):
    doc.remarks = doc.note


@frappe.whitelist()
def check_payment_pos(doc, method):
    if doc.is_pos == 1:
        if doc.paid_amount == 0:
            frappe.throw("Paid Amount Can Not Be 0")


@frappe.whitelist()
def check_customer_discount(doc, method):
    allow_discount = frappe.db.get_value('Customer', doc.customer, 'allow_discount')
    if allow_discount != '1':
        doc.additional_discount_percentage = 0
        doc.discount_amount = 0

@frappe.whitelist()
def check_customer_discount_jsx(customer):
    allow_discount = frappe.db.get_value('Customer', customer, 'allow_discount')
    if not allow_discount:
        return 0


