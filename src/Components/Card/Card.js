import React from 'react';
import './Card.css';
import noPriority from '../../icons_FEtask/No-priority.svg';
import lowPriority from '../../icons_FEtask/Img - Low Priority.svg';
import medPriority from '../../icons_FEtask/Img - Medium Priority.svg';
import highPriority from '../../icons_FEtask/Img - High Priority.svg';
import urgentPriority from '../../icons_FEtask/SVG - Urgent Priority grey.svg';

export default function Card({ cardDetails, groupValue }) {

    const setInitials = (name) => {
        if (typeof name === 'string' && name.length > 0) {
            const nameParts = name.split(' ');
            return nameParts.length > 1
                ? `${nameParts[0][0]}${nameParts[1][0]}`.toUpperCase()
                : `${name[0]}`.toUpperCase();
        }
        return '';
    };


    return (
        <div className="card-container">
            <div className="card-id-wrapper">
                <div className="card-id">{cardDetails.id}</div>

                {groupValue !== 'user' && (
                    <div className="card-profile">
                        <div className="card-profile-initial">
                            {setInitials(cardDetails.userObj.name)}
                        </div>

                        <div
                            className={
                                cardDetails.userObj.available
                                    ? "card-profile-initial-available card-profile-initial-available-true"
                                    : "card-profile-initial-available"
                            }
                        ></div>
                    </div>
                )}
            </div>

            <div className="card-title">
                {cardDetails.title.length > 70
                    ? `${cardDetails.title.substring(0, 69)}...`
                    : cardDetails.title}
            </div>

            <div className="card-tag">
                {{
                    0: (
                        <div className="card-tag-icon">
                            <img src={noPriority} alt="no priority" />
                        </div>
                    ),
                    1: (
                        <div className="card-tag-icon">
                            <img src={lowPriority} alt="low priority" />
                        </div>
                    ),
                    2: (
                        <div className="card-tag-icon">
                            <img src={medPriority} alt="medium priority" />
                        </div>
                    ),
                    3: (
                        <div className="card-tag-icon">
                            <img src={highPriority} alt="high priority" />
                        </div>
                    ),
                    4: (
                        <div className="card-tag-icon">
                            <img src={urgentPriority} alt="urgent priority" />
                        </div>
                    )
                }[cardDetails.priority]}

                {cardDetails.tag.map((tag, index) => (
                    <div className="card-tag-box" key={index}>
                        <div className="card-tag-title">{tag}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
