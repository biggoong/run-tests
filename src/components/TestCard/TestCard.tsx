import React, { FC, memo } from 'react';

type TProps = {
    description: string;
    running: boolean;
    passed: null | boolean
}

const TestCard: FC<TProps> = memo(({ description, running, passed }) => {
    return (
        <div className='Test-card'>
            <p><strong>test:</strong> {description}</p>
            <p>{!running && passed === null && 'Not Started'}</p>
            <p>{running && 'Running 💃'}</p>
            <p className='failed'>{passed === false && 'Failed 🍁'}</p>
            <p className='passed'>{passed && 'Passed 🍀'}</p>
        </div>
    )
})

export default TestCard;