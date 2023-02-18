import frappe
from frappe.utils import time_diff_in_hours


@frappe.whitelist()
def calculate_hours(check_in, check_out):
    if check_in and check_out:
        es_hours = time_diff_in_hours(check_out, check_in)
        return es_hours
    else:
        status = "Absent"
        return status
