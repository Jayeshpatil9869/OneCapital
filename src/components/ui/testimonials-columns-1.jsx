"use client";
import React from "react";
import { motion } from "framer-motion";

export const TestimonialsColumn = (props) => {
    return (
        <div className={props.className}>
            <motion.div
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: props.duration || 10,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {[
                    ...new Array(2).fill(0).map((_, index) => (
                        <React.Fragment key={index}>
                            {props.testimonials.map(({ text, image, name, role }, i) => (
                                <div className="p-8 rounded-2xl border border-gray-100 bg-white shadow-sm max-w-xs w-full hover:shadow-md transition-shadow duration-300" key={i}>
                                    <div className="text-gray-700 text-sm leading-relaxed">"{text}"</div>
                                    <div className="flex items-center gap-3 mt-5">
                                        <img
                                            width={48}
                                            height={48}
                                            src={image}
                                            alt={name}
                                            className="h-12 w-12 rounded-full object-cover shadow-sm bg-gray-100"
                                        />
                                        <div className="flex flex-col">
                                            <div className="font-semibold text-[#0D1B2A] text-sm tracking-tight leading-4">{name}</div>
                                            <div className="text-xs text-[#00C9A7] mt-1 font-medium">{role}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    )),
                ]}
            </motion.div>
        </div>
    );
};
