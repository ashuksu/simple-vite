import {Icon} from "../../../shared/ui";

export function AboutPage() {
    return (
        <div className="container">
            <div className='flex gap-4 items-center flex-wrap'>
                <Icon name="Search" className="text-green-500"/>
                <Icon name="Search" size="xs"/>
                <Icon name="Search" size="sm"/>
                <Icon name="Search" size="md"/>
                <Icon name="Search" size="lg"/>
                <Icon name="Search" size="xl"/>

                <Icon name="Activity" color="primary"/>
                <Icon name="Activity" color="error"/>
                <Icon name="Activity" color="success"/>
                <Icon name="Activity" color="muted"/>
                <Icon name="Activity" color="current"/>

                <Icon name="Settings" customSize={40}/>
                <Icon name="Settings" size="lg" customSize={'50px'}/>
                <Icon name="Settings" customSize="1.5rem"/>
                <Icon name="Settings" customSize="100%"/>

                <Icon name="Bell" customSize={32} strokeWidth={1}/>
                <Icon name="Bell" customSize={48} strokeWidth={3}/>

                <Icon
                    name="Settings"
                    customSize={40}
                    className="m-2 opacity-80 hover:opacity-100 transition-opacity size-4 size-6"
                />

                <div className="flex w-20 items-center overflow-hidden border">
                    <Icon name="Download" customSize={50} color="primary"/>
                    <span className="truncate">Длинный текст</span>
                </div>
            </div>
        </div>
    );
}