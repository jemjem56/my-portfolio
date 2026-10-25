from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, HRFlowable, Image, Table, TableStyle)
from xml.sax.saxutils import escape
import os

# -------------------- EDIT YOUR RESUME CONTENT HERE --------------------
NAME = "James Bonghanoy Panugaling"
TITLE = "Aspiring Software Developer"
CONTACT = [
    "Lamacan, Babag, Cebu City, Philippines",
    "Email: jamespanugaling16@gmail.com",
    "GitHub: github.com/jemjem56",
    "LinkedIn: linkedin.com/in/james-panugaling-46b323409/",
]
SUMMARY = (
    "Student developer driven by curiosity, creativity, and a passion for building clean, "
    "user-friendly digital experiences. Always learning, always creating, and turning ideas into reality."
)
EDUCATION = ["Cebu Eastern College, Bachelor of Science in Information Technology, 2023-2027"]
SKILLS = [
    "Programming Languages: Python, Java, C++",
    "Web Development: HTML, CSS, React",
    "Design & Workflow Tools: Figma, Git, GitHub",
]
PROJECTS = [
    ("HAUNTRA", "A horror survival game set in a haunted mansion, developed using Unity, C#, and Blender."),
    ("HUNTED ESCAPE", "A horror escape game focused on survival, exploration, and escaping dangerous environments."),
    ("FRESHWAVE", "A laundry management web application designed to automate workflows and reduce manual recordkeeping."),
    ("WASHKA", "A laundry management project designed to organize laundry-related information and operations."),
]
EXPERIENCE = []
CERTIFICATIONS = []
PORTRAIT_PATH = os.path.join(os.path.dirname(__file__), "..", "public", "images", "twobaytwo.png")
# ----------------------------------------------------------------------

BLACK = colors.HexColor("#000000")
RULE = colors.HexColor("#777777")
MUTED = colors.HexColor("#333333")
INK = colors.HexColor("#000000")

styles = {
    "name": ParagraphStyle("Name", fontName="Helvetica-Bold", fontSize=17, leading=21, textColor=BLACK, alignment=TA_LEFT, spaceAfter=2),
    "role": ParagraphStyle("Role", fontName="Helvetica", fontSize=10, leading=13, textColor=BLACK, spaceAfter=4),
    "contact": ParagraphStyle("Contact", fontName="Helvetica", fontSize=8.5, leading=11, textColor=BLACK, spaceAfter=1, splitLongWords=1),
    "section": ParagraphStyle("Section", fontName="Helvetica-Bold", fontSize=10, leading=13, textColor=BLACK, spaceBefore=8, spaceAfter=4, keepWithNext=True),
    "body": ParagraphStyle("Body", fontName="Helvetica", fontSize=9, leading=12, textColor=INK, spaceAfter=2.5, splitLongWords=1),
    "bullet": ParagraphStyle("Bullet", fontName="Helvetica", fontSize=8.7, leading=11.5, textColor=INK, leftIndent=12, firstLineIndent=-7, spaceAfter=2, splitLongWords=1),
    "project": ParagraphStyle("Project", fontName="Helvetica", fontSize=8.7, leading=11.5, textColor=INK, leftIndent=12, firstLineIndent=-7, spaceAfter=3, splitLongWords=1),
}

doc = SimpleDocTemplate(
    os.path.join(os.path.dirname(__file__), "..", "public", "resume.pdf"),
    pagesize=letter, leftMargin=0.72*inch, rightMargin=0.72*inch,
    topMargin=0.55*inch, bottomMargin=0.55*inch,
    title=f"{NAME} - Resume", author=NAME,
)
story = []

# Check whether the portrait exists
portrait = None

if os.path.isfile(PORTRAIT_PATH):
    portrait = Image(PORTRAIT_PATH, width=1.15*inch, height=1.15*inch)
else:
    print(f"Portrait not found: {os.path.abspath(PORTRAIT_PATH)}")

# Build the text portion of the header
header_text = [
    Paragraph(escape(NAME), styles["name"]),
    Paragraph(escape(TITLE), styles["role"]),
    Paragraph(escape(" | ".join(CONTACT)), styles["contact"]),
]

if portrait:
    # Text on the left, portrait on the right
    header = Table(
        [[header_text, portrait]],
        colWidths=[5.55*inch, 1.15*inch],
    )

    header.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("ALIGN", (1, 0), (1, 0), "RIGHT"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))

    story.append(header)
else:
    story.extend(header_text)

story.append(Spacer(1, 5))
story.append(
    HRFlowable(
        width="100%",
        thickness=0.6,
        color=RULE,
        spaceBefore=0,
        spaceAfter=2,
    )
)

# ATS-friendly single-column header: no portrait, tables, icons, or colored text.
story.append(Paragraph(escape(NAME), styles["name"]))
story.append(Paragraph(escape(TITLE), styles["role"]))
story.append(Paragraph(escape(" | ".join(CONTACT)), styles["contact"]))
story.append(Spacer(1, 5))
story.append(HRFlowable(width="100%", thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=2))

def section_heading(title):
    story.append(Paragraph(escape(title.upper()), styles["section"]))
    # Simple gray divider line; keep formatting ATS-friendly.
    story.append(HRFlowable(width="100%", thickness=0.5, color=RULE, spaceBefore=0, spaceAfter=5))

def add_rows(title, rows, bullets=True):
    if not rows:
        return
    section_heading(title)
    for row in rows:
        text = escape(str(row))
        story.append(Paragraph(text, styles["bullet"] if bullets else styles["body"], bulletText="•" if bullets else None))

section_heading("Profile")
story.append(Paragraph(escape(SUMMARY), styles["body"]))
add_rows("Technical Skills", SKILLS)
add_rows("Education", EDUCATION, bullets=False)

if PROJECTS:
    section_heading("Projects")
    for project_title, description in PROJECTS:
        story.append(Paragraph(f"• <b>{escape(project_title)}</b> — {escape(description)}", styles["project"]))

add_rows("Experience", EXPERIENCE)
add_rows("Certifications & Training", CERTIFICATIONS, bullets=False)

doc.build(story)
print("Created public/resume.pdf")
