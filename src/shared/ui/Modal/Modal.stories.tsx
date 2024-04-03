import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: '                В Златоусте во время выборов провели лотерею — все призы достались семье организатора. Машину Lada Vesta получила теща организатора, а его жена получила бытовую технику, полицаи уже начали провер_очку — призы вернули, а организатор уволился с должности директора ДК. Никогда такого не было и вот опять.\n',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: '                В Златоусте во время выборов провели лотерею — все призы достались семье организатора. Машину Lada Vesta получила теща организатора, а его жена получила бытовую технику, полицаи уже начали провер_очку — призы вернули, а организатор уволился с должности директора ДК. Никогда такого не было и вот опять.\n',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
