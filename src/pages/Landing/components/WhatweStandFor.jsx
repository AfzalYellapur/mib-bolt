import React, { useRef } from "react";
import { Box } from "@mui/material";
import { motion, useInView, useTransform, useScroll } from "framer-motion";

//import assets
import euterprenurialMindset from "../../../assets/Landing/euterprenial-mindset.jpg";
import leadshipQuality from "../../../assets/Landing/leadership-quality.jpg";
import cultivatingInnovation from "../../../assets/Landing/cultivating-innovation.jpg";

const WhatWeStandFor = () => {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const { scrollYProgress: scrollProgressforRef1 } = useScroll({
    target: ref1,
    offset: ["start 0.3", "start end"],
  });

  const { scrollYProgress: scrollProgressforRef2 } = useScroll({
    target: ref2,
    offset: ["start 0.3", "start end"],
  });

  const { scrollYProgress: scrollProgressforRef3 } = useScroll({
    target: ref3,
    offset: ["start 0.3", "start end"],
  });

  const y1 = useTransform(scrollYProgress, [1, 0], [100, 0]);
  const y2 = useTransform(scrollYProgress, [1, 0], [104, 0]);
  const y3 = useTransform(scrollYProgress, [1, 0], [108, 0]);
  const y4 = useTransform(scrollYProgress, [1, 0], [112, 0]);
  const y5 = useTransform(scrollYProgress, [1, 0], [116, 0]);

  const mindsetY = useTransform(scrollProgressforRef1, [1, 0], [140, 0]);
  const leadershipY = useTransform(scrollProgressforRef2, [1, 0], [120, 0]);
  const innovationY = useTransform(scrollProgressforRef3, [1, 0], [120, 0]);

  const lineHeight = useTransform(scrollProgressforRef1, [1, 0], [8, 1.6]);
  const lineHeight2 = useTransform(scrollProgressforRef2, [1, 0], [8, 1.6]);
  const lineHeight3 = useTransform(scrollProgressforRef3, [1, 0], [8, 1.6]);

  const rotate11 = useTransform(scrollProgressforRef1, [1, 0], [5, 0]);
  const rotate12 = useTransform(scrollProgressforRef1, [1, 0], [-5, 0]);

  const leadershiprotate11 = useTransform(
    scrollProgressforRef2,
    [1, 0],
    [5, 0]
  );
  const leadershiprotate12 = useTransform(
    scrollProgressforRef2,
    [1, 0],
    [-5, 0]
  );

  const innovationrotate11 = useTransform(
    scrollProgressforRef3,
    [1, 0],
    [5, 0]
  );
  const innovationrotate12 = useTransform(
    scrollProgressforRef3,
    [1, 0],
    [-5, 0]
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        style={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        {/* Header */}
        <motion.h1
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Editorialnew, sans-serif",
            fontSize: "3rem",
            fontWeight: "300",
            marginBottom: "2rem",
            textAlign: "left",
            gap: "8px",
          }}
        >
          <motion.div style={{ y: y1 }}>What</motion.div>{" "}
          <motion.div style={{ y: y2 }}>do</motion.div>
          <motion.div style={{ y: y3 }}>we</motion.div>{" "}
          <motion.div style={{ y: y4 }}>stand</motion.div>
          <motion.div style={{ y: y5 }}>for?</motion.div>
        </motion.h1>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          ref={ref1}
        >
          <Box display="flex" flexDirection="column" width="100%">
            {/* Subtitle */}
            <motion.h2
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                fontFamily: "Editorialnew, sans-serif",
                fontSize: "2rem",
                fontWeight: "300",
                marginBottom: "1rem",
                alignSelf: "flex-start",
                textAlign: "left",
              }}
            >
              <motion.div ref={ref1} style={{ y: mindsetY, rotate: rotate11 }}>
                Entrepreneurial
              </motion.div>
              <motion.div ref={ref1} style={{ y: mindsetY, rotate: rotate12 }}>
                Mindset
              </motion.div>
            </motion.h2>

            {/* Paragraph */}
            <Box display="flex" width="100%" justifyContent="space-between">
              <motion.p
                ref={ref}
                style={{
                  y: y3,
                  fontFamily: "Editorialnew, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: lineHeight,
                  textAlign: "left",
                  alignSelf: "flex-start",
                  maxWidth: "700px",
                }}
              >
                To cultivate an entrepreneurial mindset in our club members, we
                provide a range of resources and support. We offer workshops and
                seminars on business planning, market research, and financial
                management. Our networking opportunities and mentorship programs
                connect members with successful entrepreneurs. We encourage
                members to think creatively, challenge the status quo, and take
                calculated risks. An entrepreneurial mindset is about being open
                to new ideas and learning from mistakes. Our goal is to create a
                community of passionate individuals committed to driving
                positive change. By fostering an entrepreneurial spirit, we aim
                to shape a more innovative and dynamic society.
              </motion.p>
            </Box>
          </Box>
          <motion.img
            src={euterprenurialMindset}
            alt="euterprenurialMindset"
            width="275"
            height="300"
            style={{ y: mindsetY }}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          alignContent="center"
          ref={ref2}
        >
          <motion.img
            src={leadshipQuality}
            alt="LeadershipQuality"
            width={275}
            height={300}
            style={{ y: leadershipY }}
          />
          <Box display="flex" flexDirection="column" width="100%">
            {/* Subtitle */}
            <motion.h2
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                fontFamily: "Editorialnew, sans-serif",
                fontSize: "2rem",
                fontWeight: "300",
                marginBottom: "1rem",
                alignSelf: "flex-end",
                textAlign: "left",
              }}
            >
              <motion.div
                ref={ref}
                style={{ y: leadershipY, rotate: leadershiprotate11 }}
              >
                Leadership
              </motion.div>
              <motion.div
                ref={ref}
                style={{ y: leadershipY, rotate: leadershiprotate12 }}
              >
                quality
              </motion.div>
            </motion.h2>

            {/* Paragraph */}
            <Box display="flex" width="100%" justifyContent="space-between">
              <motion.p> </motion.p>
              <motion.p
                style={{
                  y: leadershipY,
                  fontFamily: "Editorialnew, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: lineHeight2,
                  textAlign: "left",
                  maxWidth: "700px",
                }}
              >
                We believe leadership is the cornerstone of personal growth and
                positive change in society. That’s why we’re committed to
                helping our members develop the skills and confidence they need
                to lead. Our mentorship program pairs aspiring leaders with
                experienced entrepreneurs, creating a space for valuable
                one-on-one learning and insights. We also host workshops and
                seminars on essential topics like communication, teamwork, and
                decision-making to equip our members with practical tools for
                leadership. Beyond formal programs, we encourage members to step
                up and take on leadership roles—whether it’s organizing events,
                managing teams, or representing the club at external forums.
                These real-world experiences help them build confidence and
                learn by doing. At the heart of it all, our mission is to
                nurture leaders who are ready to make a difference. By
                empowering individuals, we believe we can contribute to a more
                dynamic, innovative, and successful society.
              </motion.p>
            </Box>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          ref={ref3}
        >
          <Box display="flex" flexDirection="column" width="100%">
            {/* Subtitle */}
            <motion.h2
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                fontFamily: "Editorialnew, sans-serif",
                fontSize: "2rem",
                fontWeight: "300",
                marginBottom: "1rem",
                alignSelf: "flex-start",
                textAlign: "left",
              }}
            >
              <motion.div
                style={{ y: innovationY, rotate: innovationrotate11 }}
              >
                Cultivating
              </motion.div>
              <motion.div
                style={{ y: innovationY, rotate: innovationrotate12 }}
              >
                Innovation
              </motion.div>
            </motion.h2>

            {/* Paragraph */}
            <Box display="flex" width="100%" justifyContent="space-between">
              <motion.p
                style={{
                  y: innovationY,
                  fontFamily: "Editorialnew, sans-serif",
                  fontSize: "1.2rem",
                  lineHeight: lineHeight3,
                  textAlign: "left",
                  alignSelf: "flex-start",
                  maxWidth: "700px",
                }}
              >
                That’s why we focus on helping our members develop the skills
                and confidence they need to lead effectively. Through our
                mentorship program, aspiring leaders connect with experienced
                entrepreneurs for guidance and real-world insights. We also host
                workshops and seminars on key topics like communication,
                teamwork, and decision-making, giving members practical tools to
                succeed. In addition, we encourage members to take on leadership
                roles—organizing events, managing teams, or representing the
                club externally. These hands-on experiences help them grow into
                confident, capable leaders. Our goal is to empower individuals
                to drive meaningful change and build a brighter, more successful
                future for everyone.
              </motion.p>
            </Box>
          </Box>
          <motion.img
            src={cultivatingInnovation}
            alt="cultivating-Innovation"
            width={300}
            height={300}
            style={{ y: innovationY }}
          />
        </Box>
      </motion.div>
    </Box>
  );
};

export default WhatWeStandFor;
