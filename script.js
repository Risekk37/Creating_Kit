// DOM Elements
const homeTab = document.getElementById('home-tab');
const projectTab = document.getElementById('project-tab');
const resumeTab = document.getElementById('resume-tab');
const homeView = document.getElementById('home-view');
const artworkView = document.getElementById('artwork-view');
const resumeView = document.getElementById('resume-view');
const projectDetailView = document.getElementById('project-detail-view');
const backToProjectsBtn = document.getElementById('back-to-projects');

// 프로젝트 데이터 - 실제 프로젝트 정보로 채워넣으세요
const projectsData = {
    project1: {
        category: "Computational Tool",
        year: "2025",
        title: "The Grocery Link",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>The Grocery Link analyzes food accessibility challenges in the United States through a novel framework that combines traditional "food desert" concepts with grocery delivery service coverage, creating a more comprehensive understanding of food access issues.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project1/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>The Grocery Link</figcaption>
                </figure>
                </div>
                
                <h3>Multi-dimensional Food Access Issues</h3>
                <p>
                - Food Deserts: Approximately 25% of U.S. area lacks grocery stores selling fresh food within 1 mile in urban areas and 10 miles in rural areas, affecting 13% of the U.S. population.<br><br>
                - Delivery Service Gaps: Nearly half of U.S. area cannot access grocery delivery services, impacting 15% of the total population.<br><br>
                - Priority Access Areas: Identified two critical types of vulnerable regions:<br>
                   * Access Voids: Communities that are both food deserts and excluded from grocery delivery service areas<br>
                   * Vulnerable Zones: Urban food deserts overlapping with high poverty rates, where delivery costs create economic barriers<br>
                </p>
                
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project1/Food_Desert.png" alt="Food Desert Map">
                    <figcaption>Food deserts across the United States</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Delivery_Desert.png" alt="Delivery Gap Map">
                        <figcaption>Delivery service gaps across the United States</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Priority_Food_Access_Areas.png" alt="Priority Food Access Areas">
                        <figcaption>Priority food access areas: Access Voids and Vulnerable Zones</figcaption>
                    </figure>
                </div>

                <h3>Food Access Mapping Tool</h3>
                <p>
                Developed an interactive web platform for data-driven decision support:<br><br>
                -Integrated multiple datasets including USDA Food Access Research Atlas, U.S. Census Bureau data, and delivery service coverage<br>
                -Provided educational storytelling section alongside detailed analytical tools<br>
                -Enabled exploration of regions through various filters based on population, poverty rates, and socioeconomic factors<br>
                </p>
                <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project1/Access_Void.png" alt="Access Void Analysis">
                    <figcaption>Tool interface showing Access Void communities</figcaption>
                </figure>
                <figure>
                    <img src="Project_img/project1/Vulnerable_Zone.png" alt="Vulnerable Zone Analysis">
                    <figcaption>Tool interface showing Vulnerable Zone communities</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project1/The_Gorcery_Link_Interactive.gif" alt="Interactive Tool Demo">
                    <figcaption>Interactive features of the Food Access Mapping Tool</figcaption>
                </figure>
                </div>

                <h3>Innovative Example: Group Delivery System</h3>
                <p>
                Developed a Chrome extension for group delivery to overcome economic barriers:<br><br>
                - Multiple households combine orders for a single delivery<br>
                - Creates benefits for consumers, grocery stores, and existing delivery customers<br>
                - User-friendly interface displays nearby delivery groups and enables participation<br>
                </p>
                 <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project1/Chrome_Extension.png" alt="Chrome Extension Interface">
                    <figcaption>Group Delivery Chrome Extension</figcaption>
                </figure>
                <figure>
                    <img src="Project_img/project1/Group_delivery.png" alt="Group Delivery Example">
                    <figcaption>Example of group delivery options across multiple retailers</figcaption>
                </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project1/Chrome_extension_Gif.gif" alt="Chrome Extension Demo">
                        <figcaption>View of the Group Delivery Chrome Extension</figcaption>
                    </figure>
                </div>

                <h3>Technology Stack</h3>
                <p>
                Data Analysis: Python, Pandas, GeoPandas, GIS, Google API<br>
                Web Development: JavaScript, React, Mapbox API<br>
                Chrome Extension: JavaScript, HTML/CSS, Chrome Extension API<br>
                Data Visualization: D3.js
                </p>

                <h3>Impact and Significance</h3>
                <p>
                This project provides a more comprehensive understanding of food accessibility and helps policymakers identify regions where limited resources can have maximum impact. By proposing innovative delivery-based solutions alongside traditional infrastructure-focused approaches, it offers potential for faster and more effective improvements in food accessibility.
                </p>

                <h3><a href="https://risekk37.github.io/The_Grocery_Link/" target="_blank" rel="noopener noreferrer">Visit Project Website</a></h3>
            </div>
        `
    },
    project2: {
        category: "Automated Fabrication",
        year: "2024",
        title: "Transformative Automation",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>Transformative Automation is a tool developed to advance infill structure design through robotic automation. It transforms a 3D grid, generated by applying diagonal undulation to a 2D grid, into executable scripts created in Grasshopper and Python, which are then adapted for use with robotic plug-ins for physical prototyping. For the creation of physical prototype models, Arduino was employed to bridge the script with the robotic arm. This setup includes supplementary design elements, such as an end-ef- fector equipped with a heating element (solenoid) and a motor-driven series of wheels to release wood veneer tape.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project2/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>Transformative Automation</figcaption>
                </figure>
                </div>
                
                <h3>From grid to structural infill</h3>
                <p>
                TransformativeAutomation is a suite of .gh and .py scripts designed to generate a 3D grid framework from a 2D grid. This tool facilitates automation by integrating robotic plug-in languages, enabling the transformation of the 3D grid into precise point-to-point movements. It dynamically adapts to situational conditions for end-effector actions, including release (with wait time), stamp (with wait time), and directional adjustments, such as moving upward along the Z-axis for trajectory changes.
                </p><br>
                <p>Design Tool Highlights</p>
                <p>
                1. Input — Base Geometry X, Y Grid with Diagonal with Z directional Grids<br>
                2. Flexible and Light Frame Structural System<br>
                3. Automation to Enhance Scalability
                </p>
                
                <h3>Input Bounds</h3>
                <p>
                The dimensions of each modular unit in this structural system are defined in .gh as 12" x 12" x 3". The grid density is initially set at 2-inch increments, which can also be adjusted to 4-inch increments.
                </p>

                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project2/2D_to_3D.jpg" alt="Food Desert Map">
                    <figcaption>input bounds x, y, z 12" by 12" by 3", diagram</figcaption>
                </figure>
                </div>

                <h3>Creating the logic</h3>
                <p>
                Algorithm Development<br>
                The .gh and .py scripts generate integral and proportional algorithms for X, Y, Z directional grid creation. This 3D grid structure is composed of squares and diagonal curves, multiplying into clusters for modularity and scalability.
                <br><br>
                Robotic Integration<br>
                The .gh plug-in for robots takes the polylines generated by the initial algorithm and translates them into a series of calculated movement points. Simulating the robotic arm’s movement, the system accommodates travel from one point to the next, incorporating additional actions such as waiting or adjusting vertically along the Z-axis.
                <br><br>
                Physical Prototyping<br>
                Physical prototyping employs tools such as Arduino kits to interface with the robotic system. These kits include a solenoid paired with a heating element for controlled pressing actions and a motor-driven wheel assembly for dispensing wood veneer tape. Once the .gh and .py scripts are translated into the .gh plug-in for robots, the Arduino kits are integrated to complete the end-effector system. The Arduino kits connect to the digital outputs of the robotic arm, enabling real-time communication and execution of commands for the end effectors.
                </p>

                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project2/Logic.jpg" alt="Access Void Analysis">
                    <figcaption>process diagram for TransformativeAutomation Tool</figcaption>
                </figure>
                </div>

                <h3>Logic 1</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robot_Arm_GIF.gif" alt="Chrome Extension Demo">
                        <figcaption>simulation of .gh+.py process generating 3d grid from 2d grid</figcaption>
                    </figure>
                </div>

                <h3>Logic 2</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Grid_GIF.gif" alt="Chrome Extension Demo">
                        <figcaption>simulation of .gh plug-in .robots process calibrating robotic arm movement for prototype automation</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Gh_code.gif" alt="Chrome Extension Demo">
                        <figcaption>.Gh Coding</figcaption>
                    </figure>
                </div>

                <h3>Lgic 3</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robotic_connection_Diagram.png" alt="Chrome Extension Demo">
                        <figcaption>Physical modeling process diagram from input (script into robotic arm) to outputs (solenoid + end effector)</figcaption>
                    </figure>
                </div>

                <h3>End-effector Design</h3>
                <p>
                Material feed mechanism<br>
                A series of wheels with a motor controls the wood veneer tape, enabling it to move forward or stop as needed.
                <br><br>
                Heating and pressing system<br>
                A solenoid attached to a heating element performs a timed pressing action to heat the wood veneer tape at specified X, Y, Z nodes.
                <br><br>
                Design and prototyping process<br>
                PAll components were initially sketched by hand, then scaled and modeled in Rhino, followed by 3D printing as prototypes.
                </p>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Endeffector-ANI.gif" alt="Chrome Extension Demo">
                        <figcaption>End effector houses motor to turn and release the wood veneer tape and solenoid and the heating element.</figcaption>
                    </figure>
                </div>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/DI-EndEffector.png" alt="Chrome Extension Demo">
                        <figcaption>End effector attaches to the robotic arm.</figcaption>
                    </figure>
                </div>

                <h3>End-effector Design</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/Robot_video.gif" alt="Chrome Extension Demo">
                        <figcaption>Video displays the automation in action.</figcaption>
                    </figure>
                </div>

                <h3>Prototype Model</h3>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project2/DI-BuiltForm.png" alt="Chrome Extension Demo">
                        <figcaption>Physical model created using 3/4-inch wood veneer tape. </figcaption>
                    </figure>
                </div>
                
            </div>
        `
    },
    project3: {
        category: "Chrome Extension",
        year: "2025",
        title: "Group Delivery, Prototyping Chrome Extension",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>The Group Grocery Delivery Chrome extension is designed to address food accessibility challenges by enabling multiple households to consolidate orders for a single delivery. This approach extends grocery delivery services to previously unserved areas while reducing delivery costs through sharing. The extension integrates seamlessly with existing grocery websites, allowing users to join or create delivery groups within their neighborhood.
                <br>This product serves as a practical implementation of research conducted for my capstone project, which explores food deserts and delivery gaps in America. By focusing on collaborative consumption, this solution benefits both consumers (through reduced costs and increased access) and retailers (through expanded customer base with minimal additional delivery expenses). 
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project3/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>Group Delivery, Prototyping</figcaption>
                </figure>
                </div>
                
                <h3>The Challenge</h3>
                <p>
                Food accessibility remains a critical issue in America today:
                <br>
                - 19 million Americans live in food deserts<br>
                - Many areas lack delivery service due to profitability concerns<br>
                - Delivery fees are prohibitively expensive for many households<br>
                </p><br>

                <h3>Research Process</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project3/Interview.jpg" alt="Food Desert Map">
                    <figcaption>Interview Process</figcaption>
                </figure>
                </div>
                <p>
                20 in-depth interviews revealed:
                <br>
                <br>- Cost is the #1 barrier to delivery adoption
                <br>- Quality concerns prevent online grocery purchases
                <br>- Single-person households struggle with minimum order requirements
                <br>- Users want simplicity across multiple platforms
                </p>

                <h3>User Personas</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project3/Persona.jpg" alt="Food Desert Map">
                    <figcaption>Three Persona</figcaption>
                </figure>
                </div>
                
                <p>
                Eleanor, 72
                <br>
                Lives 12 miles from nearest grocery store<br>
                No personal transportation<br>
                Fixed income makes delivery fees unaffordable<br>
                <br><br>
                Mia, 34
                Busy professional with limited shopping time<br>
                Hesitant about produce quality when ordering online<br>
                Values community recommendations<br>
                <br><br>
                James, 28
                <br>
                Lives alone, needs small quantities<br>
                Frustrated by minimum order requirements<br>
                Wants to reduce food waste<br>
                </p>

                <h3>Solution: Key Features</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project3/Keypoint.jpg" alt="Access Void Analysis">
                    <figcaption>Keypoint of Groupdelivery services</figcaption>
                </figure>
                </div>

                <h3>User Flow</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project3/Userflow.jpg" alt="Access Void Analysis">
                    <figcaption>Expectation of User Flow</figcaption>
                </figure>
                </div>
                <p>Install the extension from Chrome Web Store<br><br>
                1. Visit any supported grocery website<br>
                2. Click the Group Delivery button in the corner<br>
                3. Share location or enter ZIP code<br>
                4. View active delivery groups within 10 miles<br>
                5. Add $10+ items to your cart<br>
                6. Join existing group or create a new one<br>
                7. Receive delivery confirmation when group completes<br>
                </p>

                <h3>Interface Design</h3>
                <p>
                Main Dashboard<br>
                Download our chrome extension and visit any participating frocery website. Enter your location to discover active delivery groups within a 10-mile radius, including delivery dates and available slots
                </p>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project3/Vid1.gif" alt="Chrome Extension Demo">
                        <figcaption>Group delivery main dashboard</figcaption>
                    </figure>
                </div>

                <p>
                Group Join&Creation<br>
                Join existing groups or create your own by setting preferred delivery details.
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project3/Vid2.gif" alt="Chrome Extension Demo">
                        <figcaption>Group Join&Creation</figcaption>
                    </figure>
                </div>

                <p>
                Community Chat<br>
                Connect with neighbors about product recommendations
                </p>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project3/Vid3.gif" alt="Chrome Extension Demo">
                        <figcaption>Near grocery & Community Chat</figcaption>
                    </figure>
                </div>

                <p>
                Cross-Platform Navigation<br>
               View delivery options across multiple retailers in one place
                </p>
                <div class="project-image-full">
                    <figure>
                        <img src="Project_img/project3/Vid4.gif" alt="Chrome Extension Demo">
                        <figcaption>Cross-platform Navigation</figcaption>
                    </figure>
                </div>

                <h3>Technical Implementation</h3>
                <p>
                Built with:<br>
                Frontend: JavaScript, HTML/CSS, Chrome Extension API<br>
                Backend: Firebase Realtime Database<br>
                APIs: Geolocation, Mapping, Retailer Integration<br>
                </p>

                <h3><a href="https://drive.google.com/file/d/16vmsVW-EjswJ4Ck2ekrapoxlbHOKWDoi/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Download Chrome extension</a></h3>
            </div>
        `
    },
    project4: {
        category: "Computational Design",
        year: "2025",
        title: "Interactive Automaton",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>LUMENBEAT is an interactive Automaton that transforms biometric reading into a pulsating illumination.  It draws inspiration from digital artists whose work deal with light features and human touch.  Our design objective was to create a touch based digital object that reflects a person’s heart rate in more ambient atmospheric conditions.  Nestled within a hand-shaped recess, a touch sensor invites contact - activating a pulsing choreography of light driven by digital components within the object.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>LumenBeat</figcaption>
                </figure>
                </div>
                
                <h3>Talk about the COMPONENTS</h3>
                <p>
                BASE cases microcontroller and the structure for the LED light strip
                <br>BODY houses LED light and the sensor at the point of contact
                <br>CAP closes the object
                </p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project4/Diagram.png" alt="Food Accessibility Problem">
                    <figcaption>Component Diagram</figcaption>
                </figure>
                </div>

                <h3>Talk about the FORM</h3>
                <p>
                The HEIGHT alludes to human scale for the reach 
                <br>SINUSOIDAL WAVES reflect the heart rate,
                <br>PERFORATIONS were generated for the visibility of the light flicker
                </p>

                <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project4/pic1.png" alt="Food Desert Map">
                </figure>
                <figure>
                    <img src="Project_img/project4/pic2.png" alt="Food Desert Map">
                </figure>
                </div>


                <h3>Talk briefly about the CODE</h3>
                <p>
                INPUT (pulse)
                <br>PROCESS (range set up for the colors)
                <br>OUTPUT (pulse reflected in the light)
                </p>

                <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project4/Code1.png" alt="Food Desert Map">
                </figure>
                <figure>
                    <img src="Project_img/project4/Code2.png" alt="Food Desert Map">
                </figure>
                </div>


                <h3>Iteration</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project4/iteration.jpg" alt="Food Desert Map">
                </figure>
                </div>

                <h3>Iighting</h3>
                <div class="project-image-grid">
                <figure>
                    <img src="Project_img/project4/pic3.png" alt="Food Desert Map">
                </figure>
                <figure>
                    <img src="Project_img/project4/pic4.png" alt="Food Desert Map">
                </figure>
                </div>
                
                <h3>Dispaly</h3>
                <div class="project-image-full">
                <figure>
                    <img src="Project_img/project4/vid.gif" alt="Food Desert Map">
                </figure>
                </div>
                
            </div>
        `
    },project5: {
        category: "Computational Design",
        year: "2024",
        title: "Cost Burden and Social Discomfort of Delivery Services",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>This research examines socioeconomic inequalities in delivery service access across New York City, focusing on how delivery fees disproportionately affect lower-income households.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>Cost Burden and Social Discomfort of Delivery Services</figcaption>
                </figure>
                </div>

                <h3>Delivery Fee</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/pg1.jpg" alt="Food Accessibility Problem">
                    <figcaption>Delivery Fee</figcaption>
                </figure>
                </div>
                <p>
                This visualization provides a comprehensive overview of the research, highlighting the average annual cost ($130) of delivery services and its varying impact across income levels.
                </p>

                <h3>Delivery Fee Burden by House-income</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/pg2.jpg" alt="Food Accessibility Problem">
                    <figcaption>Delivery Fee Burden by house-income</figcaption>
                </figure>
                </div>
                <p>
                - 31.7% of households experience a burden 4+ times greater than high-income earners
                <br>- Most people experience a burden level of approximately 2
                <br>- The burden levels are scaled from 1 to a maximum of 15
                </p>

                <h3>Delivery Usage by Borough</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/pg3.jpg" alt="Food Accessibility Problem">
                    <figcaption>Delivery Usage by Borough</figcaption>
                </figure>
                </div>
                <p>
                - Manhattan (higher average income) shows significantly higher delivery usage
                <br>- Bronx, Queens, and Brooklyn (lower average incomes) demonstrate lower delivery rates
                <br>- Clear correlation between income levels and delivery service utilization
                </p>

                <h3>Package Theft</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/pg4.jpg" alt="Food Accessibility Problem">
                    <figcaption>Package Theft</figcaption>
                </figure>
                </div>
                <p>
                - 44% of Americans have experienced package theft
                <br>- Average stolen package value: $112.30
                <br>- 28% are "extremely concerned" about theft
                <br>- Prevention methods: tracking deliveries (52%), staying home (50%), in-store pickup (40%)
                </p>

                <h3>Project Demonstration</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project5/vid.gif" alt="Food Accessibility Problem">
                </figure>
                </div>
                <h3>Methodology</h3>
                <p>
                The research combined quantitative data analysis with ethnographic research to examine both economic and social dimensions of delivery accessibility across different NYC boroughs.
                </p>
                
            </div>
        `
    },project6: {
        category: "Mapping",
        year: "2024",
        title: "Delivery Service Accessibility in USA",
        description: `
            <div class="project-detail-section">
                <h3>Overview</h3>
                <p>This research project maps and analyzes the geographic distribution of delivery services across the United States, identifying accessibility gaps and "delivery deserts." The study examines three main delivery categories—package, grocery, and meal delivery services—and explores how these services correlate with population density, geographic challenges, and infrastructure limitations.</p>
                
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/main.jpg" alt="Food Accessibility Problem">
                    <figcaption>Cost Burden and Social Discomfort of Delivery Services</figcaption>
                </figure>
                </div>

                <h3>Package Delivery Distribution</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic1.jpg" alt="Food Accessibility Problem">
                    <figcaption>Package Delivery Distribution</figcaption>
                </figure>
                </div>
                <p>
                This visualization maps the nationwide coverage of major package delivery providers:
                <br><br>
                <br>- UPS and USPS maintain the most extensive nationwide networks
                <br>- FedEx offers comprehensive coverage with some regional variations
                <br>- Amazon delivery services concentrate primarily in metropolitan areas and along major transportation corridors
                <br>- Significant coverage gaps exist in rural and geographically challenging regions
                </p>

                <h3>Grocery Delivery Coverage</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic2.jpg" alt="Food Accessibility Problem">
                    <figcaption>Grocery Delivery Coverage</figcaption>
                </figure>
                </div>
                <p>
                The analysis shows grocery delivery services typically operate within a 15-mile radius of store locations:
                <br><br>
                <br>- Walmart leads with 5,234 locations, providing the most extensive coverage
                <br>- Target follows with 1,780 locations across the country
                <br>- Specialty grocers like Trader Joe's (521 locations) and Whole Foods (517 locations) offer more limited geographic coverage
                <br>- Rural areas frequently fall outside delivery zones of all providers
                </p>

                <h3>Meal Delivery Service Patterns</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic3.jpg" alt="Food Accessibility Problem">
                    <figcaption>Meal Delivery Services</figcaption>
                </figure>
                </div>
                <p>
                Meal delivery services show distinct urban concentration patterns:
                <br><br>
                <br>- Services primarily rely on bicycle or car delivery, limiting their reach
                <br>- DoorDash focuses on smaller, localized delivery areas
                <br>- UberEats covers broader geographic territories
                <br>- Service availability is contingent on proximity to restaurants and delivery personnel
                <br>- Rural and suburban areas experience significant service gaps
                </p>

                <h3>Service Gaps and Population Density</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic4.jpg" alt="Food Accessibility Problem">
                    <figcaption>Service Gaps and Population Density</figcaption>
                </figure>
                </div>
                <p>
                This visualization correlates delivery service gaps with population density:
                <br><br>
                <br>- Delivery-scarce regions frequently align with geographic challenges (mountains, deserts)
                <br>- Certain areas near urban centers qualify as "delivery-deserts" despite their proximity
                <br>- Population density alone does not guarantee service availability
                <br>- Infrastructure limitations impact service feasibility in many regions
                </p>

                <h3>Food Delivery Deserts</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic5.jpg" alt="Food Accessibility Problem">
                    <figcaption>Food Delivery Deserts</figcaption>
                </figure>
                </div>
                <p>
                The analysis identifies critical food accessibility issues:
                <br><br>
                <br>- An estimated 4 million U.S. households reside in food deserts with limited grocery store access
                <br>- Many food desert regions also lack grocery and meal delivery options
                <br>- Delivery services could potentially address food access challenges but have not expanded to many vulnerable areas
                <br>- Residents in these dual-desert zones face significant barriers to obtaining fresh, healthy food
                </p>

                <h3>Case Study: Delivery Desert</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic6.jpg" alt="Food Accessibility Problem">
                    <figcaption>Houston-Area Delivery Desert</figcaption>
                </figure>
                </div>
                <p>
                This detailed case study examines a delivery desert near Houston:
                <br><br>
                <br>- Despite proximity to a major metropolitan area, this region has minimal delivery service coverage
                <br>- The nearest UPS hub is located 40 miles away
                <br>- Geographic and infrastructure limitations create significant service barriers
                <br>- The area represents a typical "proximity paradox" where nearness to urban centers doesn't ensure delivery access
                </p>

                <h3>Residential Clusters in Delivery Deserts</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/pic4.jpg" alt="Food Accessibility Problem">
                    <figcaption>Residential Clusters in Statelite image</figcaption>
                </figure>
                </div>
                <p>
                A micro-analysis of settlement patterns within the delivery desert shows:
                <br><br>
                <br>- Small, fragmented residential clusters scattered throughout the region
                <br>- Dispersed development patterns that challenge efficient delivery logistics
                <br>- Limited road infrastructure connecting communities
                <br>- Economic barriers to establishing cost-effective delivery networks
                </p>

                <h3>Project Demonstration</h3>
                <div class="project-image-full">
                    <figure>
                    <img src="Project_img/project6/vid.gif" alt="Food Accessibility Problem">
                </figure>
                </div>
                <h3>Research Impact</h3>
                <p>
                This project provides critical insights into delivery service accessibility disparities across the United States. The findings highlight how geographic, infrastructural, and economic factors create delivery deserts that disproportionately affect rural and low-income communities. The research has implications for policymakers, delivery companies, and community organizations working to improve essential service accessibility in underserved regions.
                <br>The visualization tools developed for this project offer a framework for identifying priority areas for service expansion and developing targeted solutions to bridge accessibility gaps.
                </p>
                
            </div>
        `
    }
};

// Function to reset all tabs and views
function resetAll() {
    // Remove active class from all tabs
    projectTab.classList.remove('active');
    resumeTab.classList.remove('active');
    
    // Hide all views
    homeView.classList.remove('active-view');
    artworkView.classList.remove('active-view');
    resumeView.classList.remove('active-view');
    projectDetailView.classList.add('hidden');
}

// 프로젝트 상세 페이지 표시 함수
function showProjectDetail(projectId) {
    // 프로젝트 데이터 가져오기
    const project = projectsData[projectId];
    
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }
    
    // 상세 페이지 요소 가져오기
    const detailCategory = projectDetailView.querySelector('.project-detail-category');
    const detailYear = projectDetailView.querySelector('.project-detail-year');
    const detailTitle = projectDetailView.querySelector('.project-detail-title');
    const detailContent = projectDetailView.querySelector('.project-detail-content');
    
    // 프로젝트 정보로 상세 페이지 채우기
    detailCategory.textContent = project.category;
    detailYear.textContent = project.year;
    detailTitle.textContent = project.title;
    detailContent.innerHTML = project.description;
    
    // 모든 뷰 숨기기
    homeView.classList.remove('active-view');
    artworkView.classList.remove('active-view');
    resumeView.classList.remove('active-view');
    
    // 상세 페이지 표시
    projectDetailView.classList.remove('hidden');
    
    // 브라우저 히스토리에 상태 추가
    window.history.pushState({view: 'project', projectId: projectId}, '', '#project/' + projectId);
}

// Home tab (logo) click event
homeTab.addEventListener('click', function() {
    resetAll();
    homeView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'home'}, '', '#home');
});

// Project tab click event
projectTab.addEventListener('click', function() {
    resetAll();
    projectTab.classList.add('active');
    artworkView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'projects'}, '', '#projects');
});

// Resume tab click event
resumeTab.addEventListener('click', function() {
    resetAll();
    resumeTab.classList.add('active');
    resumeView.classList.add('active-view');
    
    // 브라우저 히스토리 상태 업데이트
    window.history.pushState({view: 'resume'}, '', '#resume');
});

// 프로젝트 아이템 클릭 이벤트 (Read More 버튼)
document.querySelectorAll('.project-read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation(); // 이벤트 버블링 방지
        
        // 부모 프로젝트 아이템의 ID 가져오기
        const projectItem = this.closest('.project-item');
        const projectId = projectItem.dataset.projectId;
        
        // 프로젝트 상세 페이지 표시
        showProjectDetail(projectId);
    });
});

// 프로젝트 이미지 클릭 이벤트
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        const projectId = this.dataset.projectId;
        showProjectDetail(projectId);
    });
});

// 홈 뷰에서의 Read More 버튼 처리 부분을 다음과 같이 수정
document.querySelectorAll('.read-more').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 프로젝트 카드에서 data-project-id 속성 값 가져오기
        const projectCard = this.closest('.project-card');
        const projectId = projectCard.dataset.projectId;
        
        console.log('Read More clicked for project:', projectId); // 디버깅 로그
        
        // 프로젝트 ID가 유효한 경우에만 상세 페이지로 이동
        if (projectId) {
            // 먼저 브라우저 히스토리 상태 업데이트 (순서 중요)
            window.history.pushState({view: 'home'}, '', '#home');
            window.history.pushState({view: 'project', projectId: projectId}, '', '#project/' + projectId);
            
            // 그 다음 프로젝트 탭으로 이동하고 해당 프로젝트 상세 페이지 표시
            resetAll();
            projectTab.classList.add('active');
            showProjectDetail(projectId);
        } else {
            console.error('Project ID not found for this card');
        }
    });
});

// 뒤로 가기 버튼 클릭 이벤트
backToProjectsBtn.addEventListener('click', function() {
    projectDetailView.classList.add('hidden');
    projectTab.classList.add('active');
    artworkView.classList.add('active-view');
    
    // 브라우저 히스토리에서 이전 상태로 이동하지 않고, 직접 프로젝트 목록 상태로 이동
    window.history.pushState({view: 'projects'}, '', '#projects');
});


// 브라우저 뒤로가기/앞으로가기 이벤트 처리 - 완전히 새로 작성
window.addEventListener('popstate', function(event) {
    console.log('popstate event:', event.state);
    
    // 이전 상태가 없는 경우 (초기 상태)
    if (!event.state) {
        resetAll();
        homeView.classList.add('active-view');
        return;
    }
    
    // 상태에 따라 적절한 뷰 표시
    resetAll();
    
    if (event.state.view === 'project') {
        // 프로젝트 상세 페이지로 이동
        projectTab.classList.add('active');
        showProjectDetail(event.state.projectId);
        
    } else if (event.state.view === 'projects') {
        // 프로젝트 목록 페이지로 이동
        projectTab.classList.add('active');
        artworkView.classList.add('active-view');
        
    } else if (event.state.view === 'home') {
        // 홈 페이지로 이동
        homeView.classList.add('active-view');
        
    } else if (event.state.view === 'resume') {
        // 이력서 페이지로 이동
        resumeTab.classList.add('active');
        resumeView.classList.add('active-view');
    }
});

// 페이지 로드 시 초기 히스토리 상태 설정 - 수정
document.addEventListener('DOMContentLoaded', function() {
    // 먼저 모든 로그 확인용 코드 실행
    console.log('DOM Content Loaded');
    
    // 프로젝트 카드의 dataset 확인
    document.querySelectorAll('.project-card').forEach((card, index) => {
        console.log(`Project card ${index + 1}, ID:`, card.dataset.projectId);
    });
    
    // 초기 상태 설정
    resetAll();
    homeView.classList.add('active-view');
    
    // URL 해시에 따라 적절한 뷰 표시
    const hash = window.location.hash;
    
    if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        resetAll();
        projectTab.classList.add('active');
        showProjectDetail(projectId);
        
    } else if (hash === '#projects') {
        resetAll();
        projectTab.classList.add('active');
        artworkView.classList.add('active-view');
        
    } else if (hash === '#resume') {
        resetAll();
        resumeTab.classList.add('active');
        resumeView.classList.add('active-view');
        
    } else {
        // 다른 경우 홈 페이지로 설정
        resetAll();
        homeView.classList.add('active-view');
        // 초기 히스토리 상태 설정
        window.history.replaceState({view: 'home'}, '', '#home');
    }
});