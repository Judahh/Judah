<?php
//    include ('../../../../../../Languages/MultilingualText.php');
    include ('../../../../../../Languages/CheckLanguage.php');
?>

<div id="DivIdCode">
    <div id="DivIdWorker">
        <div id="DivIdProjectTitle">
            <div id="DivIdText">
                <div id="DivIdProjectTitleText">
                    <div id="DivIdTitleTextSize" style="color: #ffffff">
                        <?php
                            $multilingualText = MultilingualText::MultilingualText();
                            echo $multilingualText->getMultilingualTextFromWindowFromCommon($language, "Worker", "work");
                        ?>
                    </div>
                </div>
            </div>
        </div>

        <div id="DivIdTableCodeWrap">

        </div>
    </div>
</div>
