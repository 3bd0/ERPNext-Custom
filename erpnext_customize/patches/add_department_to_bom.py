import frappe

def execute():
    frappe.db.sql(""" update `tabBOM` set department = 'All Departments' """)
