import React, { useContext, useState } from 'react';

// ---- CONTEXT
import ThemeContext, { themes } from '../../context/ThemeContext';

const Landing = () => {
    const currentTheme = useContext(ThemeContext)
    const [theme, setTheme] = useState(themes);
    

    const toggleTheme = (e) => {

        setTheme(currentTheme[e.target.name])

    }

    return (
        <> 
            <div className='container'>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non volutpat lacus. Aliquam erat volutpat. Curabitur mollis viverra risus, non interdum leo cursus vel. Phasellus eget dolor a velit luctus dignissim vitae ut quam. Donec condimentum pharetra nunc, sit amet pharetra lorem pulvinar quis. Suspendisse tincidunt, lectus a egestas lacinia, dui sem facilisis mauris, a consequat quam libero non quam. Donec posuere magna id tortor lacinia pellentesque.

                    Suspendisse massa sapien, dignissim non eleifend quis, semper ut ipsum. Proin vel vehicula eros, eget consequat enim. Sed ultrices, quam vel imperdiet faucibus, odio felis pharetra risus, sit amet rhoncus ex odio eu dolor. Vivamus ac orci placerat, pellentesque dui vel, vulputate neque. Nam eu ex non tellus pellentesque porta. Sed vehicula tellus eu ex auctor, ac maximus mi pellentesque. Donec pretium velit sit amet sodales mollis.
                    
                    Integer viverra lorem magna, quis aliquet nibh sagittis vel. Ut sed varius ligula. Sed dictum massa non facilisis posuere. Fusce faucibus, eros nec laoreet bibendum, purus velit egestas tellus, vitae vehicula eros arcu quis ante. Aliquam elementum ipsum non justo placerat suscipit. In iaculis arcu massa, sit amet consectetur mi semper non. Fusce id arcu quis ante interdum sodales.
                    
                    Nullam volutpat, quam ac cursus pellentesque, metus ante dapibus erat, eu faucibus mauris nisi vel ex. Vivamus posuere luctus metus, efficitur hendrerit est euismod eget. Nulla nec aliquet justo. Sed placerat sagittis purus, vitae dignissim mauris. Donec mattis orci sed sollicitudin imperdiet. Cras sit amet malesuada est. Nulla fringilla ultrices scelerisque. Suspendisse fermentum, ex at viverra vulputate, nisi odio suscipit odio, non iaculis leo arcu at nulla. Ut et vehicula erat. Fusce ultricies tellus ac feugiat suscipit. Integer imperdiet arcu at erat tincidunt vulputate. Ut gravida sed quam et fringilla.
                    
                    Sed finibus molestie rutrum. Curabitur in orci eu est accumsan vestibulum sit amet eu dui. Fusce in odio erat. Proin nec lectus venenatis, eleifend quam et, cursus erat. Donec viverra ante a orci ornare faucibus. Fusce dignissim, lorem sit amet maximus auctor, lacus massa tincidunt tortor, eget volutpat lectus massa euismod dolor. Vivamus a elementum elit. Mauris commodo massa purus, sit amet finibus felis rhoncus ac. Vestibulum nibh ex, lacinia in augue at, cursus ultricies sapien. Sed accumsan suscipit urna.
                    
                    Sed tempor arcu sit amet dolor auctor elementum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras magna ipsum, scelerisque nec nulla sit amet, aliquet ultricies purus. Donec commodo vulputate semper. Quisque magna lectus, ultricies vitae nulla vitae, gravida posuere neque. Curabitur vel massa euismod, hendrerit ante at, semper justo. Suspendisse vehicula ante sem, eget varius lacus tristique semper.
                    
                    Mauris nec elementum neque. Morbi vitae egestas ligula. Aliquam erat volutpat. Proin congue at turpis sed semper. Nulla placerat dolor eget hendrerit elementum. Fusce sodales nunc in enim malesuada ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    
                    Mauris velit metus, commodo vitae eros eu, eleifend commodo enim. Vivamus et feugiat nulla, a vestibulum nunc. In elementum fringilla consequat. Quisque eu erat rutrum, semper magna efficitur, tincidunt risus. Suspendisse lobortis dictum urna, eu fermentum arcu vehicula ac. Proin accumsan feugiat metus, venenatis lobortis est consequat vel. Ut faucibus tellus tellus. In mollis metus rhoncus enim dapibus consequat. Vestibulum tincidunt purus eget est aliquam, ac laoreet nisi volutpat.
                    
                    Suspendisse porta, velit ac hendrerit pretium, libero orci commodo urna, non vehicula sapien mi id quam. Duis at luctus augue. Pellentesque auctor nisl massa, vel mollis odio efficitur vel. Nunc malesuada lorem quis est mollis iaculis vitae at purus. Suspendisse condimentum, ligula a porttitor lobortis, mi diam laoreet elit, ac luctus urna enim a metus. Sed vestibulum augue lectus, condimentum molestie purus blandit ac. Vivamus velit ligula, porttitor vel pulvinar sed, fringilla ut orci. Maecenas fringilla, dolor id laoreet varius, odio urna volutpat mi, id pellentesque ex tortor sed urna. In ut felis eget ex faucibus aliquet at in tellus. In in ante dui. Quisque cursus fringilla odio, quis rhoncus ex sagittis eget. Praesent malesuada quis diam eu malesuada. Fusce consectetur nibh sed iaculis condimentum. Duis eu libero pellentesque, aliquam leo nec, sagittis tortor. Quisque tellus nisi, pharetra ac justo sodales, fringilla sodales eros.
                    
                    Aliquam commodo vitae turpis ut tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi id lacinia leo. Sed laoreet finibus justo, nec euismod nisi pretium id. In ut nisi in nibh rhoncus tempor. Suspendisse laoreet, mi quis malesuada hendrerit, felis nisi ultrices ex, at bibendum odio elit vitae ipsum. Nam vel commodo felis. Donec et augue est. Vivamus ut tristique est. Vivamus vulputate porttitor mauris vel tincidunt.
                </section>
                <nav style={theme}>
                    <button onClick={toggleTheme} name='neumorphism' >Neumorphism</button>
                    <button onClick={toggleTheme} name='transparent' >Transparent</button>
                    <button onClick={toggleTheme} name='twoTone' >Two Tone</button>
                </nav>
            </div>
        </>
    )
}

export default Landing;